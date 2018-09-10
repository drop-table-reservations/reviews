const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static('public'));
app.use(express.json());

app.get('/restaurants/:restaurantId/reviews', (req, res) => {
  res.status(200).send(`Data requested for restaurant ${req.params.restaurantId}!`);
});

app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));
