
const models = require('../models')


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


// Function to show a singular product based on an input of the item's ID
function show(req, res){
    const id = req.params.id;

    models.products.findByPk(id).then(result =>{
        res.status(200).json(result);
    })
    .catch(error =>{
        res.status(500).json({
            message: "Something went wrong"
        })
    });
}


module.exports = {

    save:save,
    show:show
};