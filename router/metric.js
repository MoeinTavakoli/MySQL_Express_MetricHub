const express = require('express');
const app = express();


// controller
const controller = require('../controller/metrics.js');
// 
app.get('/' , controller.metrics);


module.exports = app;