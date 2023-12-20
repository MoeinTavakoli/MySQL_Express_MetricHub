// add prometheus register 
const {register , requestCounter} = require('../service/prometheus.js')

const client = require('prom-client');


async function metrics(req, res , next) {
    try {
        const metrics = await register.metrics()
        res.set('Content-Type', register.contentType)
        res.end(metrics)
        next()
    } catch (error) {
        throw error;
    }
}

async function requestCounterController (req, res)  {
  requestCounter.inc({ method: req.method, status: res.statusCode });
  register.registerMetric(requestCounter); // register metric manually
}


module.exports={
    metrics,
    requestCounterController
}