const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');

const EventController = require('../controllers/events');
const { restrictAccess } = require('../utils/access');
const { upload } = require('../utils/upload');

router
  .route('/')
  .get(EventController.index)
  .post(
    restrictAccess('user'),
    upload.single('file'),
    EventController.newEvent,
  );

router
  .route('/counter/:eventId')
  .post(EventController.incrementSeenCounter);

router
  .route('/:eventId')
  .get(EventController.getEvent)
  .put(restrictAccess('user'), EventController.replaceEvent)
  .patch(
    restrictAccess('user'),
    upload.single('file'),
    EventController.updateEvent,
  )
  .delete(restrictAccess('admin'), EventController.removeEvent);

router
  .route('/upload-image')
  .post(
    restrictAccess('user'),
    upload.single('file'),
    EventController.uploadImage,
  );

module.exports = router;
