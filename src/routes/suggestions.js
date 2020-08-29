const express = require('express');
const router = require('express-promise-router')();

const SuggestionsController = require('../controllers/suggestions');

router.route('/').get(SuggestionsController.index);

module.exports = router;
