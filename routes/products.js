const express = require('express');
const productControler = require ('../controlers/get.products');

const router = express.Router();

router.post("/", productControler.save); //Add a product
router.get("/:id", productControler.show); //Find a product via its ID. 

module.exports = router; 