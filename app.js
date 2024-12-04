const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 

const productsRoute = require('./routes/products');

app.use(bodyParser.json());

app.use('/products', productsRoute);

module.exports = app;