const express = require('express');
const customerControler = require ('../controlers/customer.controler');

const router = express.Router();

router.post("/register", customerControler.addCustomer); //Create a new user function 
router.get("/listAll", customerControler.showAllCustomers); //Lists all the registered users 
router.get("/customer/:id", customerControler.showSingularCustomer); //gets a singular user via their ID 
router.patch("/customer/update/:id", customerControler.updateCustomerInfomation); //updates a users infomation 
router.delete("/customer/remove/:id", customerControler.removeCustomer); //Removes a user via their ID 


module.exports = router; 