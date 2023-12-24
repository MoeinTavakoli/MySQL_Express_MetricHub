const express = require('express');
const app = express();



// controller
const controller = require('../controller/metrics.js');
// middleware
app.use(controller.requestCounterController)
// 
// app.get('/' , controller.metrics);


module.exports = app;