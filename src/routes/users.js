const express = require('express');
const router = require('express-promise-router')();

const UserController = require('../controllers/users');
const { restrictAccess } = require('../utils/access');
const { upload } = require('../utils/upload');

router
  .route('/')
  .get(restrictAccess('user'), UserController.index)
  .post(
    restrictAccess('admin'),
    upload.single('file'),
    UserController.newUser,
  );

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
