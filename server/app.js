const express = require('express');
const { getReviews } = require('../database/db.js');

const app = express();
app.use(express.static('public'));
app.use(express.json());

app.get('/restaurants/:restaurantId/reviews', (req, res) => {
  const { restaurantId } = req.params;
  getReviews(restaurantId, (err, reviews) => {
    if (err) return res.status(500).json('Error getting restaurant');
    if (!reviews) return res.status(404).json('Restaurant not found on server');
    return res.status(200).json(reviews);
  });
});

module.exports = app;
