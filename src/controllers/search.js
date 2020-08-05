const { basicSearch } = require('./mockups/search_mockup');
const User = require('../models/user');
const { getFilters, getAvailableFilters } = require('../utils');

module.exports = {
  index: async (req, res, next) => {
    const User = require('../models/user');
    const { query, params } = req;
    const { text } = params;
    const { sort, ...otherQuery } = query;
    const splitText = text.split(' ');
    const users = await User.find({
      $or: [
        { title: { $in: splitText } },
        { name: { $in: splitText } },
        { surname: { $in: splitText } },
        { specialities: { $in: splitText } },
        { themes: { $in: splitText } },
        { atentionType: { $in: splitText } },
        { 'addressList.province': { $in: splitText } },
        { 'addressList.locality': { $in: splitText } },
        { about: { $regex: text } },
        { practice: { $regex: text } },
      ],
      ...otherQuery,
    });
    const filters = getFilters(otherQuery);
    const availableFilters = getAvailableFilters(users);
    const jsonRes = {
      results: users,
      paging: {
        total: users.length,
        offset: 0,
        limit: 0,
        primary_results: Math.min(users.length, 100),
      },
      sort: { _id: sort, name: sort },
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
