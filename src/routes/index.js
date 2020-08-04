const express = require('express');
const router = require('express-promise-router')();

// Public routes
router.use('/auth', require('./auth'));
router.use('/articles', require('./articles'));
router.use('/users', require('./users'));
router.use('/courses', require('./courses'));
router.use('/search', require('./search'));

module.exports = router;
