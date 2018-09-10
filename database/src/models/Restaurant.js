const mongoose = require('mongoose');
const { Schema } = mongoose;

const restaurantSchema = new Schema({
  _id: Number,
  name: String,
  reviews: [reviewSchema],
});

const Restaurant = mongoose.model('Restaurant', restaurantSchema);

module.exports = { restaurantSchema, Restaurant };
