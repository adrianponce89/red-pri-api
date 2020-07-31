const express = require('express');
const router = require('express-promise-router')();

const UserController = require('../controllers/users');
const { restrictAccess } = require('./utils');

router
  .route('/')
  .get(UserController.index)
  .post(restrictAccess('admin'), UserController.newUser);

router
  .route('/:userId')
  .get(UserController.getUser)
  .put(restrictAccess('admin'), UserController.replaceUser)
  .patch(restrictAccess('user'), UserController.updateUser)
  .delete(restrictAccess('admin'), UserController.removeUser);

module.exports = router;
