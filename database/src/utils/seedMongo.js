const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const { Schema } = mongoose;

const filePath = path.resolve('./database/src/data/restaurantsReviews.json');
const restaurantsReviews = JSON.parse(fs.readFileSync(filePath).toString());

const db = mongoose.createConnection('mongodb://localhost:27017/DropTable');

const reviewSchema = new Schema({
  _id: Number,
  username: String,
  overallScore: Number,
  foodScore: Number,
  serviceScore: Number,
  ambianceScore: Number,
  valueScore: Number,
  noiseLevel: Number,
  wouldRecommend: Boolean,
  occasion: String,
  recommendedFor: [String],
  review: String,
});

const restaurantSchema = new Schema({
  _id: Number,
  name: String,
  reviews: [reviewSchema],
});

const Restaurant = db.model('Restaurant', restaurantSchema);

Restaurant.create(restaurantsReviews, (err, success) => {
  if (err) {
    console.log('Error loading DB: \n', err);
    return mongoose.disconnect();
  }
  console.log('Success loading DB: \n', success);
  return mongoose.disconnect();
});
