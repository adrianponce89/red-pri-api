const express = require('express');
const router = require('express-promise-router')();

const SlideController = require('../controllers/slides');
const { restrictAccess } = require('../utils/access');
const { upload } = require('../utils/upload');

router
  .route('/')
  .get(SlideController.index)
  .post(restrictAccess('admin'), SlideController.newSlide);

router
  .route('/:slideId')
  .get(SlideController.getSlide)
  .put(restrictAccess('admin'), SlideController.replaceSlide)
  .patch(
    restrictAccess('admin'),
    upload.single('file'),
    SlideController.updateSlide,
  )
  .delete(restrictAccess('admin'), SlideController.removeSlide);

module.exports = router;
