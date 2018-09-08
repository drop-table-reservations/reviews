const express = require('express');

const PORT = process.env.PORT || 3000;

const app = express();
app.use(express.static('public'));
app.use(express.json());

app.get('/hello', (req, res) => {
  res.status(200).json(req);
});

const testFunction = input => input;

app.listen(PORT, () => console.log(`app listening on port ${PORT}!`));

module.exports = testFunction;
