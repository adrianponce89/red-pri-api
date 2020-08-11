const User = require('../models/user');
const { getFilters, getAvailableFilters } = require('../utils');

module.exports = {
  index: async (req, res, next) => {
    const { text, ...otherQuery } = req.query;
    let query = otherQuery;
    if (text) {
      const splitText = text.split(' ');
      query = {
        ...query,
        $or: [
          { title: { $in: splitText } },
          { fullName: { $regex: text } },
          { specialities: { $in: splitText } },
          { themes: { $in: splitText } },
          { atentionType: { $in: splitText } },
          { 'addressList.province': { $in: splitText } },
          { 'addressList.locality': { $in: splitText } },
          { 'phoneList.number': { $in: splitText } },
          { about: { $regex: text } },
          { practice: { $regex: text } },
        ],
      };
    }

    const users = await User.find({
      ...query,
    });
    const filters = getFilters(req.query);
    const availableFilters = getAvailableFilters(users);
    const jsonRes = {
      results: users,
      paging: {
        total: users.length,
        offset: 0,
        limit: 0,
        primary_results: Math.min(users.length, 100),
      },
      sort: { _id: 'time_desc', name: 'Mas Reciente' },
      availableSorts: [
        { _id: 'relevance', name: 'Relevancia' },
        { _id: 'time_desc', name: 'Mas Reciente' },
        { _id: 'time_asc', name: 'Mas antiguo' },
      ],
      filters,
      availableFilters,
    };
    res.status(200).json(jsonRes);
  },
};
