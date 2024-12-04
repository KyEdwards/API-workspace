

function index(req, res){
 const products = 'test, list '

 res.send(products);
};

module.exports = {
    index: index
};