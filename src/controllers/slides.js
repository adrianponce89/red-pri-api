const path = require('path');
const fs = require('fs');
const imgur = require('imgur');
const Slide = require('../models/slide');
const { isImage } = require('../utils');

imgur.setClientId(process.env.IMGUR_CLIENT);
imgur.setAPIUrl(process.env.IMGUR_API_URL);

module.exports = {
  index: async (req, res, next) => {
    const slides = await Slide.find({});
    res.status(200).json(slides);
  },

  newSlide: async (req, res, next) => {
    const sanitized = {
      title: req.body.title,
      content: req.body.content,
      href: req.body.href,
    };
    const newSlide = new Slide(sanitized);
    const slide = await newSlide.save();
    res.status(201).json(slide);
  },

  getSlide: async (req, res, next) => {
    const { slideId } = req.params;
    const slide = await Slide.findOne({
      uid: slideId,
    });
    res.status(200).json(slide);
  },

  replaceSlide: async (req, res, next) => {
    const { slideId } = req.params;
    const newSlide = req.body;
    const oldSlide = await Slide.findByIdAndUpdate(slideId, newSlide);
    res.status(200).json({ success: true });
  },

  updateSlide: async (req, res, next) => {
    const { slideId } = req.params;
    const newSlide = {};
    const data = JSON.parse(req.body.data);

    if (data.title) newSlide['title'] = data.title;
    if (data.content) newSlide['content'] = data.content;
    if (data.href) newSlide['href'] = data.href;

    if (data.fileURL) {
      newSlide['picUrl'] = data.fileURL;
      // Delete previous image from Imgur
      const oldSlide = Slide.findById(slideId);
      if (oldSlide.deletehash) {
        await imgur.deleteImage(oldSlide.deletehash);
      }
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

      // Delete previous image from Imgur
      const oldSlide = Slide.findById(slideId);
      if (oldSlide.deletehash) {
        await imgur.deleteImage(oldSlide.deletehash);
      }
      // Upload new Image to Imgur
      const imgurRes = await imgur.uploadFile(filePath);

      // Save Imgur data on slide
      newSlide['picUrl'] = imgurRes.data.link;
      newSlide['deletehash'] = imgurRes.data.deletehash;

      // Delete temporal image server
      fs.unlink(filePath, (err) => {
        if (err) {
          console.error(err);
        }
      });
    }

    await Slide.findByIdAndUpdate(slideId, {
      $set: newSlide,
    });
    res.status(200).json({ success: true });
  },
  removeSlide: async (req, res, next) => {
    const { slideId } = req.params;
    const oldSlide = await Slide.findOne({ _id: slideId });
    if (oldSlide.deletehash) {
      await imgur.deleteImage(oldSlide.deletehash);
    }
    await Slide.deleteOne({ _id: slideId });
    res.status(200).json({ success: true });
  },
};
