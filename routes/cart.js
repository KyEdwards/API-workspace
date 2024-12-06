const express = require('express');
const cartControler = require ('../controlers/cart.controler');

const router = express.Router();

router.get("/:id", cartControler.viewCart); //Function to view a cart via the customers ID (not linked to the customer's table yet)
router.post("/user:id", cartControler.createcart); //still in development. current issue is trying to array multiple product and price numbers




module.exports = router; 