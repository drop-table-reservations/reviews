const faker = require('faker');

const generateRestaurant = () => ({
  _id: faker.finance.account(),
  name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
});

const generateReview = () => {
  const review = {
    _id: faker.finance.account(),
    username: faker.name.findName(),
    userReviews: faker.random.number(25),
    foodScore: faker.random.number({ min: 1, max: 5 }),
    serviceScore: faker.random.number({ min: 1, max: 5 }),
    ambianceScore: faker.random.number({ min: 1, max: 5 }),
    valueScore: faker.random.number({ min: 1, max: 5 }),
    overallScore: 0,
    noiseLevel: faker.random.number({ min: 1, max: 4 }),
    wouldRecommend: true,
    occasion: faker.random.arrayElement(['Everyday Dining', 'Date',
      'Special Occassion', 'Business Meal', 'Friends\' Get-Together']),
    recommendedFor: [faker.random.arrayElement(['Great for Brunch',
      'Vibrant Bar Scene', 'Neighborhood Gem', 'Paleo Friendly', 'Worth the Drive',
      'Spicy', 'Late-night Find', 'Great Beer', 'People Watching', 'Romantic',
      'Scenic View', 'Fun', 'Casual', 'Organic'])],
    review: faker.lorem.paragraph(faker.random.number({ min: 1, max: 4 })),
  };

  review.overallScore = Math.ceil((review.foodScore + review.serviceScore
    + review.ambianceScore + review.valueScore) / 5);
  review.wouldRecommend = review.overallScore >= 3;

  return review;
};

module.exports = { generateRestaurant, generateReview };
