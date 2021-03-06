const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');

const ArticleController = require('../controllers/articles');
const { restrictAccess } = require('../utils/access');
const { upload } = require('../utils/upload');

router
  .route('/')
  .get(ArticleController.index)
  .post(
    restrictAccess('user'),
    upload.single('file'),
    ArticleController.newArticle,
  );

router
  .route('/counter/:articleId')
  .post(ArticleController.incrementSeenCounter);

router
  .route('/:articleId')
  .get(ArticleController.getArticle)
  .put(restrictAccess('user'), ArticleController.replaceArticle)
  .patch(
    restrictAccess('user'),
    upload.single('file'),
    ArticleController.updateArticle,
  )
  .delete(restrictAccess('admin'), ArticleController.removeArticle);

router
  .route('/upload-image')
  .post(
    restrictAccess('user'),
    upload.single('file'),
    ArticleController.uploadImage,
  );

module.exports = router;
