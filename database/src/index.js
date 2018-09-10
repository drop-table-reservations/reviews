const mongoose = require('mongoose');
const { Restaurant } = require('./models/Restaurant.js');

// TODO: move connection elsewhere?
mongoose.connect('mongodb://localhost:27017/DropTable');

const getRestaurant = (restaurantId, callback) => {
  Restaurant.findById(restaurantId, (err, restaurant) => {
    if (err) callback(err, null);
    callback(null, restaurant);
  });
};

const getRestaurantReviews = (restaurantId, callback) => {
  Restaurant.findById(restaurantId, (err, restaurant) => {
    if (err) callback(err, null);
    callback(null, restaurant.reviews);
  });
};

module.exports = { getRestaurant, getRestaurantReviews };
