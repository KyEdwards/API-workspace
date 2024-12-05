
const models = require('../models')

//---------------------------------------//
//Function to add a Singular product
function save(req, res){
    const product = {
        product_name: req.body.product_name,
        price: req.body.price,
        quantity_avalable: req.body.quantity_avalable
    }

    
models.products.create(product).then(result => {
    res.status(201).json({
        message: "Product created sucsesfully",
        product: result
    });
}).catch(error => {
    res.status(500).json({
        message: "Something went wrong",
        error: error
    })
});
}

//---------------------------------------//
// Function to show a singular product based on an input of the item's ID
function show(req, res){
    const id = req.params.id;

    models.products.findByPk(id).then(result =>{
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
             message: "Something went wrong!, Product Id not found :(" 
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
//Function to return all of the products in the table and their row values. 
function index( req, res){
    models.products.findAll().then(result =>{
        res.status(200).json(result);
    }).catch(err =>{
        res.status(500).json({
            message: "Something went wrong."
        })
    });
}

//---------------------------------------//
//Function to update a singular product. 
function update(req, res){
    const id = req.params.id;
    const updatedProduct = {
        product_name: req.body.product_name,
        price: req.body.price,
        quantity_avalable: req.body.quantity_avalable
    }
    models.products.update(updatedProduct, {where: {id:id}}).then(result=>{
        res.status(200).json({
            message: "Product Updated", 
            product: updatedProduct
        });
    }).catch(error =>{
        res.status(200).json({
            message: "Something went wrong", 
            error: error
        });
    })
}

//---------------------------------------//
// Function to remove a product from the databse. 
function removeProduct(req,res){
    const id = req.params.id;

    models.products.destroy({where: {id:id}}).then(resutlt =>{
        res.status(200).json({
            message: "Product Removed", 
        });
    }).catch(error =>{
        res.status(200).json({
            message: "Something went wrong", 
            error: error
        });
    })
}




//---------------------------------------//
module.exports = {

    save:save,
    show:show,
    index:index,
    update:update,
    removeProduct:removeProduct
};