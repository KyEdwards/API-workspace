const express = require('express');
const productControler = require ('../controlers/get.products');

const router = express.Router();

router.get("/", productControler.index);

module.exports = router; 