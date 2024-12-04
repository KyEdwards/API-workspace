const express = require('express');

const app = express(); 

const productsRoute = require('./SQL_databases/routes/products');
app.use('/products', productsRoute);

module.exports = app;