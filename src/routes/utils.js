// utils.js

module.exports = {
  // Restric access to some routes
  // Three level access: ['signin', 'author', 'admin']
  // TODO create roles
  restrictAccess: (access = 'signin') => (req, res, next) => {
    if (req.isAuthenticated()) {
      console.log('isAuthenticated');
      const { role } = req.user;
      console.log('access:', access, ', role:', role);
      if (
        role === 'admin' ||
        (access === 'author' && role === 'author') ||
        access === 'signin'
      ) {
        return next();
      }
    }
    res.status(401).json({
      error: 'El usuario no tiene los privilegios adecuados',
    });
  },
};
