const express = require('express');
const app = express();


// controller
const controller = require('../controller/customer');
// 
app.get('/' , controller.getAllCustomers);
app.get('/:id' , controller.getCustomerByID);


module.exports = app;