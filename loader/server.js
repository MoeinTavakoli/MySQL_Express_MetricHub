const express = require('express');
const app = express();
const responseTime = require('response-time');

require('../db/_connection');   

// use morgan lib
const morgan = require('morgan')
app.use(morgan('tiny'))

// middleware
app.use(responseTime());

app.use('*' , require('../router/global.js') ); //, next()
  

// route /metrics 
app.use('/metrics', require('../router/metric.js'))
// route customer
app.use('/customer' , require('../router/customer.js'));

app.use('*' , (req,res)=>{
  res.status(404).send('not found !!!');
});

module.exports = app;