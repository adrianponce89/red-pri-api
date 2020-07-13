const express = require('express');
const router = require('express-promise-router')();

// Public routes
router.use('/auth', require('./auth'));
router.use('/articles', require('./articles'));

module.exports = router;
