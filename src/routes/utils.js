// utils.js

module.exports = {
  // Restric access to some routes
  // Three level access: ['signin', 'author', 'admin']
  restrictAccess: (access = 'signin') => (req, res, next) => {
    if (req.isAuthenticated()) {
        const { isAdmin, isAuthor } = req.user;
        if (isAdmin || (access === 'author' && isAuthor) || (access === 'signin')) {
          return next();
        }
    }
    res.redirect('/');
  }
};
