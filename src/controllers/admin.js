const Article = require('../models/article');
const Event = require('../models/event');
const User = require('../models/user');

module.exports = {
  articles: async (req, res, next) => {
    const articles = await Article.find({}, null, {
      sort: { createdAt: -1 },
    }).populate('author');
    res.status(200).json(articles);
  },
  events: async (req, res, next) => {
    const events = await Event.find({}, null, {
      sort: { createdAt: -1 },
    });
    res.status(200).json(events);
  },
  users: async (req, res, next) => {
    const users = await User.find({});
    const securedUsers = users.map((user) => user.secured());
    res.status(200).json(securedUsers);
  },
  normalizeUsers: async (req, res, next) => {
    let users = await User.find({});
    users.forEach(async (user) => {
      const normalized = {
        email: user.email.toLowerCase().replace(/-/g, ' '),
      };

      if (user.name)
        normalized['name'] = user.name
          .toLowerCase()
          .replace(/-/g, ' ');
      if (user.surname)
        normalized['surname'] = user.surname
          .toLowerCase()
          .replace(/-/g, ' ');
      if (user.username)
        normalized['username'] = user.username
          .toLowerCase()
          .replace(/-/g, ' ');
      if (user.fullname) {
        normalized['fullname'] = user.fullname
          .toLowerCase()
          .replace(/-/g, ' ');
      } else {
        const name = user.name
          ? user.name.toLowerCase().replace(/-/g, ' ')
          : '';
        const surname = user.surname
          ? user.surname.toLowerCase().replace(/-/g, ' ')
          : '';
        normalized['fullname'] = `${name} ${surname}`;
      }
      if (user.title)
        normalized['title'] = user.title
          .toLowerCase()
          .replace(/-/g, ' ');
      if (user.specialities)
        normalized['specialities'] = user.specialities.map((st) =>
          st.toLowerCase().replace(/-/g, ' '),
        );
      if (user.themes)
        normalized['themes'] = user.themes.map((st) =>
          st.toLowerCase().replace(/-/g, ' '),
        );
      if (user.atentionType)
        normalized['atentionType'] = user.atentionType.map((st) =>
          st.toLowerCase().replace(/-/g, ' '),
        );

      await User.findByIdAndUpdate(user._id, {
        $set: normalized,
      });
    });

    users = await User.find({});
    res
      .status(200)
      .json({ users: users.map((u) => u.secured()), success: true });
  },
};
