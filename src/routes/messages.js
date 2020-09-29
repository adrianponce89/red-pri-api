const express = require('express');
const router = require('express-promise-router')();
const { restrictAccess } = require('../utils/access');
const MessageController = require('../controllers/messages');

router
  .route('/')
  .get(restrictAccess('admin'), MessageController.index)
  .post(MessageController.newMessage);

router
  .route('/:messageId')
  .delete(restrictAccess('admin'), MessageController.removeMessage);

module.exports = router;
