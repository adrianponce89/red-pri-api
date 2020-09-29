const router = require('express-promise-router')();

const ArticleController = require('../controllers/articles');

router
  .route('/articles/:articleId')
  .post(ArticleController.incrementCount);

module.exports = router;
