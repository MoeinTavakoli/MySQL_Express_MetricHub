const express = require('express');
const app = express();

// middleware
const {requestCounterController , responseTimeController} = require('../controller/metrics')

// controller
const controller = require('../controller/customer');
// 
app.get('/' , controller.getAllCustomers ,responseTimeController, requestCounterController);
app.get('/:id' , controller.getCustomerByID ,responseTimeController, requestCounterController);


module.exports = app;