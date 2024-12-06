const express = require('express');
const bodyParser = require('body-parser');

const app = express(); 

const productsRoute = require('./routes/products');
const customerRoute = require('./routes/customers');
const cartRoute = require('./routes/cart');

app.use(bodyParser.json());


app.use('/products', productsRoute);
app.use('/customers', customerRoute);
app.use('/cart', cartRoute);


module.exports = app;