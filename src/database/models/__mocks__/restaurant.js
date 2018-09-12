const responses = {
  noRest: null,
  noReviews: {
    _id: 87654321,
    name: "Miller's East Coast Deli",
    reviews: [],
  },
  reviews: {
    _id: 12345678,
    name: 'House of Prime Rib',
    reviews: [{ _id: 12345, overallScore: 5 }, { _id: 43218, overallScore: 2 }],
  },
};

const Restaurant = {
  findById: (restId, cb) => {
    switch (restId) {
      case '12345678':
        return cb(null, responses.reviews);
      case '87654321':
        return cb(null, responses.noReviews);
      case '99999999':
        return cb(null, responses.noRest);
      case '00000000':
        return cb(new Error('Server issue'), null);
      default:
        return cb(null, null);
    }
  },
};

module.exports = { Restaurant };
