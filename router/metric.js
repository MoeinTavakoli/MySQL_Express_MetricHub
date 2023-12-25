const express = require('express');
const app = express();

// middleware
const {requestCounterController} = require('../controller/metrics')
// controller
const controller = require('../controller/metrics.js');
// 
app.get('/' , controller.metrics , requestCounterController);


module.exports = app;