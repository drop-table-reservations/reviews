const fs = require('fs');
const path = require('path');
const { generateRestaurant, generateReview } = require('./randomGenerators');

const makeRestReviewsFile = (numRestaurants, maxReviews, fileName) => {
  const restaurants = [];
  for (let i = 0; i < numRestaurants; i += 1) {
    const restaurant = generateRestaurant();
    restaurant.reviews = [];
    for (let j = 0; j < maxReviews; j += 1) {
      restaurant.reviews.push(generateReview());
    }
    restaurants.push(restaurant);
  }
  fs.writeFileSync(
    path.resolve(__dirname, `${fileName}.json`),
    JSON.stringify(restaurants),
  );
};

makeRestReviewsFile(10, 5, 'testFile');

module.exports = makeRestReviewsFile;
