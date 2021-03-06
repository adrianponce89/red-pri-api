const User = require('../models/user');
const {
  getFilters,
  getAvailableFilters,
  getLatLng,
} = require('../utils');

module.exports = {
  index: async (req, res, next) => {
    const { location, ...otherQuery } = req.query;
    let query = { ...otherQuery, 'permits.index': true };

    if (location) {
      const range = 0.045;
      const { lat, lng } = getLatLng(location);
      query = {
        ...query,
        'addressList.location.lat': {
          $gt: lat - range,
          $lt: lat + range,
        },
        'addressList.location.lng': {
          $gt: lng - range,
          $lt: lng + range,
        },
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
