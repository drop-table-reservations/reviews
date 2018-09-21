const express = require('express');
const cors = require('cors');
const path = require('path');
const { getReviews } = require('./database/db.js');

const app = express();
app.use(cors());
app.use(express.json());

app.get('/api/restaurants/:restaurantId/reviews', (req, res) => {
  const { restaurantId } = req.params;
  getReviews(restaurantId, (err, reviews) => {
    if (err) return res.status(500).json('Error getting restaurant');
    if (!reviews) return res.status(404).json('Restaurant not found on server');
    return res.status(200).json(reviews);
  });
});

app.get('/bundle.js', (req, res) => {
  res.sendFile(path.resolve('public/bundle.js'));
});

app.get('/bundle.js.map', (req, res) => {
  res.sendFile(path.resolve('public/bundle.js.map'));
});

app.get('*', (req, res) => {
  res.sendFile(path.resolve('public/index.html'));
});

module.exports = app;
