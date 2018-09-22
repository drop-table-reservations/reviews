const faker = require('faker');

const generateRestaurant = () => ({
  _id: faker.finance.account(),
  name: `${faker.commerce.productAdjective()} ${faker.commerce.product()}`,
});

const generateReview = () => {
  const review = {
    _id: faker.finance.account(),
    username: faker.name.findName(),
    userReviews: faker.random.number({ min: 1, max: 25 }),
    userLocation: faker.random.arrayElement([
      'San Francisco',
      'Los Angeles',
      'New York',
      'Minneapolis',
      'Washington, D.C',
      'Miami',
      'Richmond',
      'Denver',
    ]),
    foodScore: faker.random.number({ min: 1, max: 5 }),
    serviceScore: faker.random.number({ min: 1, max: 5 }),
    ambianceScore: faker.random.number({ min: 1, max: 5 }),
    valueScore: faker.random.number({ min: 1, max: 5 }),
    overallScore: 0,
    noiseLevel: faker.random.number({ min: 1, max: 4 }),
    wouldRecommend: true,
    occasion: faker.random.arrayElement([
      'Everyday Dining',
      'Date',
      'Special Occassion',
      'Business Meal',
      "Friends' Get-Together",
    ]),
    recommendedFor: [
      faker.random.arrayElement([
        'Good for Groups',
        'Great for Brunch',
        'Spicy',
        'Fun',
        'Casual',
        'Organic',
      ]),
    ],
    text: faker.lorem.paragraph(faker.random.number({ min: 1, max: 4 })),
  };

  const bias = faker.random.number({ min: -1, max: 1 });
  review.overallScore = Math.ceil(
    (review.foodScore +
      review.serviceScore +
      review.ambienceScore +
      review.valueScore) /
      4 +
      bias,
  );

  review.wouldRecommend = review.overallScore >= 3;

  return review;
};

module.exports = { generateRestaurant, generateReview };
