jest.mock('./db/db.js');

const request = require('supertest');
const app = require('./app.js');

describe('GET /api/restaurants/:restaurantId/reviews', () => {
  test('it should respond with 200 for existing restaurant', async () => {
    const res = await request(app).get('/api/restaurants/12345678/reviews');
    expect(res.statusCode).toBe(200);
  });

  test('it should respond with 404 for non-existent restaurant', async () => {
    const res = await request(app).get('/api/restaurants/99999999/reviews');
    expect(res.statusCode).toBe(404);
    expect(res.body).toBe('Restaurant not found on server');
  });

  test('it should respond with array of reviews', async () => {
    const res = await request(app).get('/api/restaurants/12345678/reviews');
    expect(res.body).toHaveLength(2);
  });

  test('it should respond with empty array if no reviews', async () => {
    const res = await request(app).get('/api/restaurants/87654321/reviews');
    expect(res.body).toHaveLength(0);
  });
});
