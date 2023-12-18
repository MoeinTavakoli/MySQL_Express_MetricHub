// add prometheus register 
const {register , requestCounter} = require('../service/prometheus.js')

const client = require('prom-client');


async function metrics(req, res) {
    try {
        const metrics = await register.metrics()
        res.set('Content-Type', register.contentType)
        res.end(metrics)
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function requestCounterController (req, res, next)  {
  requestCounter.inc({ method: req.method, status: res.statusCode });
  register.registerMetric(requestCounter); // register metric manually
  next();
}


module.exports={
    metrics,
    requestCounterController
}