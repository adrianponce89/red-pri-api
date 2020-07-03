const express = require('express');
const router = require('express-promise-router')();

const ArticleController = require('../controllers/articles');

router.route('/')
	.get(ArticleController.index)
	.post(ArticleController.newArticle)

router.route('/:articleId')
	.get(ArticleController.getArticle)
	.put(ArticleController.replaceArticle)
	.patch(ArticleController.updateArticle)

module.exports = router;
