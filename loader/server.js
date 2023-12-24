const express = require('express');
const app = express();
const responseTime = require('response-time');

const {requestCounterController} = require('../controller/metrics.js')
require('../db/_connection');   

// use morgan lib
const morgan = require('morgan')
app.use(morgan('tiny'))

// middleware
// add time to request object for calculate connection time
app.use((req,res ,next)=>{
  req.startTime = Date.now();
  next()
})

// middleware
app.use(responseTime());

// route /metrics 
app.use('/metrics', require('../router/metric.js'))
// route customer
app.use('/customer' , require('../router/customer.js'));

app.use('*' , (req,res)=>{
  res.status(404).send('not found !!!');
  requestCounterController(req ,res)
});

module.exports = app;