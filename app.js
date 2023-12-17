const express = require('express')
const app = express()

// use morgan lib
const morgan = require('morgan')
app.use(morgan('tiny'))

// import server config
const config = require('./config')
const port = config.server.port


require('./db/_connection.js')
require('./db/customers.js')

app.get('/', (req, res) => {
  res.send('Hello World!')
})

// add prometheus register 
const register = require('./service/prometheus.js')

// route /metrics 
app.get('/metrics', async(req, res) => {
  const metrics = await  register.metrics()
  res.set('Content-Type', register.contentType)
  res.end(metrics)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})