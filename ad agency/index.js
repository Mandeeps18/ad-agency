// server.js
const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const mongoose = require('./db');
const routes = require('./routes/routes');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/', routes);

const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});