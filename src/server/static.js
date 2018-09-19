const express = require('express');
const cors = require('cors');

// tiny server to serve bundle.js during development
const app = express();
app.use(cors());
app.use(express.static('public'));

const PORT = process.env.PORT || 4444;

app.listen(PORT, () => console.log(`App listening on port ${PORT}!`));

module.exports = app;
