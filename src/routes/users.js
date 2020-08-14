const express = require('express');
const router = require('express-promise-router')();
const multer = require('multer');

const UserController = require('../controllers/users');
const { restrictAccess } = require('../utils/access');
const { getFileExtension } = require('../utils');

var storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, 'uploads/');
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + getFileExtension(file));
  },
});
const upload = multer({ storage });

router
  .route('/')
  .get(UserController.index)
  .post(restrictAccess('admin'), UserController.newUser);

router
  .route('/:userId')
  .get(UserController.getUser)
  .put(restrictAccess('admin'), UserController.replaceUser)
  .patch(
    restrictAccess('user'),
    upload.single('file'),
    UserController.updateUser,
  )
  .delete(restrictAccess('admin'), UserController.removeUser);

module.exports = router;
