const router = require('express-promise-router')();

const AdminController = require('../controllers/admin');
const { restrictAccess } = require('../utils/access');

router
  .route('/articles')
  .get(restrictAccess('admin'), AdminController.articles);

router
  .route('/users')
  .get(restrictAccess('admin'), AdminController.users);

router
  .route('/normalize-users')
  .get(restrictAccess('admin'), AdminController.normalizeUsers);

module.exports = router;