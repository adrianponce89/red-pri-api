const express = require('express');
const router = require('express-promise-router')();

// Public routes
router.use('/auth', require('./auth'));
router.use('/articles', require('./articles'));

// Restric access to some routes
const restrictAccess = (req, res, next) => {
  if (req.isAuthenticated()) return next();
  res.redirect('/');
};

// Private Routes
router.get('/perfil', restrictAccess, (req, res) => {
  res.json({
    user: req.user,
  });
});

module.exports = router;
