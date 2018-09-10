const express = require('express');
const { getRestaurantReviews } = require('../../database/src/index.js');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static('public'));
app.use(express.json());

app.get('/restaurants/:restaurantId/reviews', (req, res) => {
  const { restaurantId } = req.params;
  getRestaurantReviews(restaurantId, (err, restaurant) => {
    if (err) return res.status(500).send('Error getting restaurant');
    return res.status(200).json(restaurant);
  });
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
