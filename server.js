// Require dependencies
const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

/**
 * Ititializations
 */
const app = express();
dotenv.config();
require('./src/db/database');

const port = process.env.PORT || 4000;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('Welcome to my API');
});

// Initializing http server
app.server = app.listen(port, () => {
  console.log('Running on port', port);
});

module.exports = app;