const fs = require('fs');
const path = require('path');
const mongoose = require('mongoose');
const { Restaurant } = require('../models/restaurant');

const filePath = path.resolve('./src/database/data/restaurantsReviews.json');
const restaurantsReviews = JSON.parse(fs.readFileSync(filePath).toString());

const DB_URI =
  process.env.DB_URI || 'mongodb://localhost:27017/DropTableReviews';
mongoose.connect(
  DB_URI,
  { useNewUrlParser: true },
);

Restaurant.create(restaurantsReviews, (err, success) => {
  if (err) {
    console.log('Error loading DB: \n', err);
    return mongoose.disconnect();
  }
  console.log(`Loaded ${restaurantsReviews.length} restaurants to DB!`);
  return mongoose.disconnect();
});
