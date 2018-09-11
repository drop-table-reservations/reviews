const getReviews = jest.fn((restId, cb) => {
  const responses = {
    noRest: null,
    noReviews: [],
    reviews: [
      { _id: 12345, overallScore: 5 },
      { _id: 43218, overallScore: 2 },
    ],
  };

  switch (restId) {
    case '12345678':
      return cb(null, responses.reviews);
    case '87654321':
      return cb(null, responses.noReviews);
    case '99999999':
      return cb(null, responses.noRest);
    default:
      return cb(null, null);
  }
});

module.exports = { getReviews };
