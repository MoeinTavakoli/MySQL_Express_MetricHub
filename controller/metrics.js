// add prometheus register 
const {register , requestCounter , responseTime} = require('../service/prometheus.js')

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

async function responseTimeController (req, res , next)  {
    const start = req.startTime
    const end = Date.now();
    responseTime.set({}, end-start )
    await register.registerMetric(responseTime); // register metric manually
    next()
}
  
module.exports={
    metrics,
    requestCounterController,
    responseTimeController
}