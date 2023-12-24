const express = require('express');
const app = express();

// middleware
const {requestCounterController , responseTimeController , totalResponseCounterController} = require('../controller/metrics')

// controller
const controller = require('../controller/customer');
// 
app.get('/' , controller.getAllCustomers ,responseTimeController , totalResponseCounterController, requestCounterController);
app.get('/:id' , controller.getCustomerByID ,responseTimeController, totalResponseCounterController, requestCounterController);


module.exports = app;