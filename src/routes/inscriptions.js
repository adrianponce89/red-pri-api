const express = require('express');
const router = require('express-promise-router')();
const { restrictAccess } = require('../utils/access');
const InscriprionsController = require('../controllers/inscriptions');

router
  .route('/')
  .get(restrictAccess('admin'), InscriprionsController.index)
  .post(InscriprionsController.newInscription);

router
  .route('/:inscriptionId')
  .delete(
    restrictAccess('admin'),
    InscriprionsController.removeInscription,
  );

module.exports = router;
