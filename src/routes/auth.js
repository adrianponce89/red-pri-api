const express = require('express');
const router = require('express-promise-router')();

const AuthController = require('../controllers/auth');

router.route('/signup').post(AuthController.signup);

router.route('/signin').post(AuthController.signin);

router.route('/signout').get(AuthController.signout);

module.exports = router;
