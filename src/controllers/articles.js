const path = require('path');
const fs = require('fs');
const imgur = require('imgur');
const textVersion = require('textversionjs');
const sanitizeHtml = require('sanitize-html');
const Article = require('../models/article');
const { sanitizeConfig } = require('../config');
const { isImage } = require('../utils');

imgur.setClientId(process.env.IMGUR_CLIENT);
imgur.setAPIUrl(process.env.IMGUR_API_URL);

module.exports = {
  index: async (req, res, next) => {
    const { limit, sort, order, ...otherQuery } = req.query;
    const options = {
      sort: { createdAt: -1 },
    };
    if (limit) {
      options['limit'] = parseInt(limit);
    }
    if (sort) {
      options['sort'] = { [sort]: order || -1 };
    }

    const articles = await Article.find(
      { ...otherQuery, published: true },
      null,
      options,
    ).populate('author');
    const plainArticles = articles.map((article) => ({
      _id: article._id,
      title: article.title,
      uid: article.uid,
      tags: article.tags,
      category: article.category,
      author: article.author,
      content: textVersion(article.content).substr(0, 500),
      updatedAt: article.updatedAt,
      createdAt: article.createdAt,
      picUrl: article.picUrl,
      seenCounter: article.seenCounter,
    }));
    res.status(200).json(plainArticles);
  },

  newArticle: async (req, res, next) => {
    if (!(req.user.permits.writes || req.user.role === 'admin')) {
      return res.status(401).json({
        success: false,
        error: 'El usuario no esta autorizado',
      });
    }

    const data = JSON.parse(req.body.data);

    const sanitized = {
      title: data.title,
      uid: await Article.getArticleUidFor(data.title),
      content: sanitizeHtml(data.content, sanitizeConfig),
      category: data.category,
      tags: data.tags,
      author: req.user.id,
      seenCounter: 0,
    };

    if (req.file) {
      if (!isImage(req.file)) {
        return res.status(400).json({
          success: false,
          error: 'Tipo de imagen invalido',
        });
      }
      const filePath = path.join(
        __dirname,
        '../../uploads',
        req.file.filename,
      );

      // Upload new Image to Imgur
      const imgurRes = await imgur.uploadFile(filePath);

      // Save Imgur data on article
      sanitized['picUrl'] = imgurRes.data.link;
      sanitized['deletehash'] = imgurRes.data.deletehash;

      // Delete temporal image server
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }

    const newArticle = new Article(sanitized);
    const article = await newArticle.save();
    res.status(201).json(article);
  },

  getArticle: async (req, res, next) => {
    const { articleId } = req.params;
    const article = await Article.findOne({
      uid: articleId,
    }).populate('author');
    res.status(200).json(article);
  },

  replaceArticle: async (req, res, next) => {
    if (!(req.user.permits.writes || req.user.role === 'admin')) {
      return res.status(401).json({
        success: false,
        error: 'El usuario no esta autorizado',
      });
    }

    const { articleId } = req.params;
    const newArticle = req.body;
    const oldArticle = await Article.findByIdAndUpdate(
      articleId,
      newArticle,
    );
    res.status(200).json({ success: true });
  },

  updateArticle: async (req, res, next) => {
    if (!(req.user.permits.writes || req.user.role === 'admin')) {
      return res.status(401).json({
        success: false,
        error: 'El usuario no esta autorizado',
      });
    }

    const { articleId } = req.params;
    const newArticle = {};
    const data = JSON.parse(req.body.data);

    if (data.title) {
      newArticle['title'] = data.title;
      newArticle['uid'] = await Article.getArticleUidFor(data.title);
    }
    if (data.content) newArticle['content'] = data.content;

    if (data.published != undefined)
      newArticle['published'] = data.published;

    if (req.file) {
      if (!isImage(req.file)) {
        return res.status(400).json({
          success: false,
          error: 'Tipo de imagen invalido',
        });
      }
      const filePath = path.join(
        __dirname,
        '../../uploads',
        req.file.filename,
      );

      // Delete previous image from Imgur
      const oldArticle = Article.findById(articleId);
      if (oldArticle.deletehash) {
        await imgur.deleteImage(oldArticle.deletehash);
      }
      // Upload new Image to Imgur
      const imgurRes = await imgur.uploadFile(filePath);

      // Save Imgur data on article
      newArticle['picUrl'] = imgurRes.data.link;
      newArticle['deletehash'] = imgurRes.data.deletehash;

      // Delete temporal image server
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }

    await Article.findByIdAndUpdate(articleId, {
      $set: newArticle,
    });
    res.status(200).json({ success: true });
  },
  removeArticle: async (req, res, next) => {
    const { articleId } = req.params;
    const oldArticle = await Article.findOne({ _id: articleId });
    if (oldArticle.deletehash) {
      await imgur.deleteImage(oldArticle.deletehash);
    }
    await Article.deleteOne({ _id: articleId });
    res.status(200).json({ success: true });
  },
  incrementSeenCounter: async (req, res, next) => {
    const { articleId } = req.params;
    await Article.findOneAndUpdate(
      { _id: articleId },
      {
        $inc: { seenCounter: 1 },
      },
    );
    res.status(200).json();
  },
  uploadImage: async (req, res, next) => {
    if (!(req.user.permits.writes || req.user.role === 'admin')) {
      return res.status(401).json({
        success: false,
        error: 'El usuario no esta autorizado',
      });
    }

    if (req.file) {
      if (!isImage(req.file)) {
        return res.status(400).json({
          success: false,
          error: 'Tipo de imagen invalido',
        });
      }
      const filePath = path.join(
        __dirname,
        '../../uploads',
        req.file.filename,
      );
      // Upload new Image to Imgur
      const imgurRes = await imgur.uploadFile(filePath);

      // Delete temporal image server
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(err);
        }
      });

      return res.status(200).json({
        location: imgurRes.data.link,
      });
    }

    return res.status(400).json({ success: false });
  },
};
