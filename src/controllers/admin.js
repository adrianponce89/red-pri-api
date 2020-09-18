const Article = require('../models/article');
const User = require('../models/user');

module.exports = {
  articles: async (req, res, next) => {
    const articles = await Article.find({}, null, {
      sort: { createdAt: -1 },
    }).populate('author');
    res.status(200).json(articles);
  },
  users: async (req, res, next) => {
    const users = await User.find({});
    const securedUsers = users.map((user) => user.secured());
    res.status(200).json(securedUsers);
  },
};
