const express = require('express');
const router = require('express-promise-router')();

const ArticleController = require('../controllers/articles');
const { restrictAccess } = require('../utils/access');

router
  .route('/')
  .get(ArticleController.index)
  .post(restrictAccess('author'), ArticleController.newArticle);

router
  .route('/:articleId')
  .get(ArticleController.getArticle)
  .put(restrictAccess('author'), ArticleController.replaceArticle)
  .patch(restrictAccess('author'), ArticleController.updateArticle)
  .delete(restrictAccess('admin'), ArticleController.removeArticle);

module.exports = router;
