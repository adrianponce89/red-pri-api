const { basicSearch } = require('./mockups/search_mockup');

module.exports = {
  index: async (req, res, next) => {
    res.status(200).json(basicSearch);
  },
};
