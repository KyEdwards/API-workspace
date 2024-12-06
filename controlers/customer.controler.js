const models = require('../models')

//---------------------------------------//
//Function to add a customer
function addCustomer(req, res){
    const customer = {
        first_name: req.body.first_name,
        second_name: req.body.second_name,
        address: req.body.second_name,
    }
    models.customers.create(customer).then(result => {
        res.status(201).json({
            message: "Coustomer registered sucsesfully",
            customer: result
        });
    }).catch(error => {
        res.status(500).json({
            message: "Something went wrong",
            error: error
        })
    });
}
//---------------------------------------//
//Function show all customers

function showAllCustomers(req, res){
    models.customers.findAll().then(result =>{
        res.status(200).json(result);
    }).catch(err =>{
        res.status(500).json({
            message: "Something went wrong."
        })
    });
}
//---------------------------------------//
//Function to show singular customer via id

function showSingularCustomer(req, res){
    const id = req.params.id;

    models.customers.findByPk(id).then(result =>{
        if(result){
            res.status(200).json(result);
        }else{
            res.status(404).json({
             message: "Something went wrong!, Customer Id not found :(" 
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
//Function to update a customer
function updateCustomerInfomation(req, res){   
    const id = req.params.id;
    const updatedcustomer = {
        first_name: req.body.first_name,
        second_name: req.body.second_name,
        address: req.body.second_name
    }
    models.customers.update(updatedcustomer, {where: {id:id}}).then(result=>{
        res.status(200).json({
            message: "Customer infomation Updated", 
            customer: updatedcustomer
        });
    }).catch(error =>{
        res.status(200).json({
            message: "Something went wrong", 
            error: error
        });
    })
}

//---------------------------------------//
//Function to remove a customer
function removeCustomer(req,res){
    const id = req.params.id;

    models.customers.destroy({where: {id:id}}).then(resutlt =>{
        res.status(200).json({
            message: "Customer account Removed", 
        });
    }).catch(error =>{
        res.status(200).json({
            message: "Something went wrong", 
            error: error
        });
    })
}


module.exports ={
    addCustomer:addCustomer,
    showAllCustomers:showAllCustomers,
    showSingularCustomer:showSingularCustomer,
    updateCustomerInfomation:updateCustomerInfomation,
    removeCustomer:removeCustomer
};