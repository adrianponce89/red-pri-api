const User = require('../models/user');

module.exports = {
  index: async (req, res, next) => {
    const users = await User.find({ 'permits.index': true });
    const titles = new Set();
    const specialities = new Set();
    const themes = new Set();
    const atentionType = new Set();
    users.forEach((user) => {
      titles.add(user.title);
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
      titlesList: Array.from(titles).filter((v) => v != null),
      specialitiesList: Array.from(specialities).filter(
        (v) => v != null,
      ),
      themesList: Array.from(themes).filter((v) => v != null),
      atentionTypesList: Array.from(atentionType).filter(
        (v) => v != null,
      ),
    });
  },
};
