jest.mock('./models/restaurant.js');
const { getReviews } = require('./db');

describe('getReviews function', () => {
  test('it should invoke cb with array of rest reviews', (done) => {
    const callback = (err, reviews) => {
      expect(reviews).toHaveLength(2);
      expect(reviews[0]).toEqual({ _id: 12345, overallScore: 5 });
      done();
    };
    getReviews('12345678', callback);
  });

  test('it should invoke cb with empty arr if rest has no reviews', (done) => {
    const callback = (err, reviews) => {
      expect(reviews).toHaveLength(0);
      expect(reviews).toEqual([]);
      done();
    };
    getReviews('87654321', callback);
  });

  test('it should invoke callback with null if restaurant does not exist', (done) => {
    const callback = (err, reviews) => {
      expect(reviews).toBe(null);
      done();
    };
    getReviews('99999999', callback);
  });

  test('it should invoke callback with error if one is returned from db', (done) => {
    const callback = (err, reviews) => {
      expect(reviews).toBe(null);
      expect(err.message).toMatch(/Server issue/);
      done();
    };
    getReviews('00000000', callback);
  });
});
