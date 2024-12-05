const express = require('express');
const productControler = require ('../controlers/get.products');

const router = express.Router();

router.post("/", productControler.save); //Add a product
router.get("/:id", productControler.show); //Find a product via its ID. THE : is a placeholder for the endpoints data sent. 
router.get("/", productControler.index); //Gets all the products in the product table. 
router.patch("/:id", productControler.update); //Update a product with it's ID in the endpoint and the updated values in a JSON format.
router.delete("/:id", productControler.removeProduct); //Removes a product from the table via its ID in the endpoint. 

module.exports = router; 