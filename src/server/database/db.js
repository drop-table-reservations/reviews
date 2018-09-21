const mongoose = require('mongoose');
const { Restaurant } = require('./models/restaurant.js');

const DB_URI =
  process.env.DB_URI || 'mongodb://localhost:27017/DropTableReviews';

mongoose.connect(
  DB_URI,
  { useNewUrlParser: true },
);

const getReviews = (restId, cb) => {
  Restaurant.findById(restId, (err, restaurant) => {
    if (err) return cb(err, null);
    const reviews = restaurant ? restaurant.reviews : null;
    return cb(null, reviews);
  });
};

module.exports = { getReviews };
