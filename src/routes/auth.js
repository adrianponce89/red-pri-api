const express = require('express');
const router = require('express-promise-router')();
const passport = require('passport');

router.post('/local-signup', passport.authenticate('local-signup', {
  successRedirect: '/',
  failureRedirect: '/?signupError=1',
}));

router.post('/local-signin', passport.authenticate('local-signin', {
  successRedirect: '/',
  failureRedirect: '/?signinError=1'
}));

router.get('/signout', (req, res) => {
  req.logout();
  res.redirect('/');
});

module.exports = router;
