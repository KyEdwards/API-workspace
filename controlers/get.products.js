
const models = require('../models')

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



module.exports = {

    save:save
};