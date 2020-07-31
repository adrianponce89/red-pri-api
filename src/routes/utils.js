// utils.js
const passport = require('passport');

module.exports = {
  // Restric access to some routes
  // Three level access: ['signin', 'author', 'admin']
  // TODO create roles
  restrictAccess: (access = 'user') => (req, res, next) => {
    passport.authenticate('jwt', (error, user, info) => {
      if (error) {
        return res.status(401).json({
          error,
        });
      }
      if (req.isAuthenticated()) {
        const { role } = user;
        if (
          role === 'admin' ||
          (access === 'author' && role === 'author') ||
          access === 'user'
        ) {
          return next();
        }
      }
      res.status(401).json({
        error: 'El usuario no esta autorizado',
      });
    })(req, res, next);
  },
};
