const models = require('../models');


//---------------------------------------//
// Function to return a users cart 
function viewCart(req, res){
    const UserId = req.params.id; //Id curently needs to be manualy inputed 

    models.cart.findByPk(UserId).then(result =>{ 
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
             message: "Something went wrong!, cart not found :(" 
            })
        }
    })
    .catch(error =>{
        res.status(500).json({
            message: "Something went wrong."
        })
    });
}
//---------------------------------------//
// Function to create a cart 
function createcart(req, res){
    const userId = req.params.id
    const cart = {
        products_id: req.body.products_id,
        prices: req.body.prices,
        customer_id: userId
    }

    
models.cart.create(cart).then(result => {
    res.status(201).json({
        message: "Current user cart",
        cart: result
    });
}).catch(error => {
    res.status(500).json({
        message: "Something went wrong",
        error: error
    })
});
}





//---------------------------------------//
//Function to edit a cart


//---------------------------------------//
//Function to edit a cart 


//---------------------------------------//
//Function to show all the carts 


module.exports ={
    viewCart:viewCart,
    createcart:createcart
};