const express = require('express');
const app = express();

// middleware
const {requestCounterController} = require('../controller/metrics')

// controller
const controller = require('../controller/customer');
// 
app.get('/' , controller.getAllCustomers , requestCounterController);
app.get('/:id' , controller.getCustomerByID , requestCounterController);


module.exports = app;