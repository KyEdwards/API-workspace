const express = require('express');
const productControler = require ('../controlers/get.products');

const router = express.Router();

router.post("/", productControler.save);

module.exports = router; 