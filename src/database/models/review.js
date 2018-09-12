const mongoose = require('mongoose');

const { Schema } = mongoose;

const reviewSchema = new Schema({
  _id: Number,
  date: Date,
  username: String,
  userReviews: Number,
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

const Review = mongoose.model('Review', reviewSchema);

module.exports = { reviewSchema, Review };
