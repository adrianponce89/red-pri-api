const express = require('express');
const router = require('express-promise-router')();

const MessageController = require('../controllers/messages');

router
  .route('/')
  .get(MessageController.index)
  .post(MessageController.newMessage)
  .delete(MessageController.removeMessage);

module.exports = router;
