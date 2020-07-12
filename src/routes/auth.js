const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');

router.post('/local-signup', passport.authenticate('local-signup', {
  successRedirect: '/noticias',
  failureRedirect: '/',
}));

router.post('/local-signin', passport.authenticate('local-signin', {
  successRedirect: '/noticias',
  failureRedirect: '/'
}));

router.get('/signout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
