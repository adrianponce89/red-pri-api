const express = require('express');
const router = require('express-promise-router')();

router.use('/articles', require('./articles'));

module.exports = router;
