const passport = require('passport');
const jwt = require('jsonwebtoken');
const { to } = require('await-to-js');

const setup = () => {
  passport.serializeUser((user, done) => done(null, user._id));

  passport.deserializeUser(async (id, done) => {
    const [err, user] = await to(User.findById(id));
    return done(err, user);
  });
};

const signToken = (user) => {
  return jwt.sign({ data: user }, process.env.JWT_SECRET, {
    expiresIn: 604800,
  });
};

module.exports = { setup, signToken };
