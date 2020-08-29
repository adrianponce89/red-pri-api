const User = require('../models/user');

module.exports = {
  index: async (req, res, next) => {
    const users = await User.find({});
    const specialities = new Set();
    const themes = new Set();
    const atentionType = new Set();
    users.forEach((user) => {
      user.specialities.forEach((item) => {
        specialities.add(item);
      });
      user.themes.forEach((item) => {
        themes.add(item);
      });
      user.atentionType.forEach((item) => {
        atentionType.add(item);
      });
    });

    res.status(200).json({
      specialitiesList: Array.from(specialities),
      themesList: Array.from(themes),
      atentionTypesList: Array.from(atentionType),
    });
  },
};
