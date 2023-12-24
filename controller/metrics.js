// add prometheus register 
const {register , requestCounter , responseTime , totalResponseCounter} = require('../service/prometheus.js')

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
    responseTime.set({ method: req.method, status: res.statusCode }, end-start )
    await register.registerMetric(responseTime); // register metric manually
    next()
}

async function totalResponseCounterController (req, res , next)  {
    const start = req.startTime
    const end = Date.now();
    totalResponseCounter.labels(req.method).observe(end-start);
    await register.registerMetric(totalResponseCounter); // register metric manually
    next()
}

module.exports={
    metrics,
    requestCounterController,
    responseTimeController,
    totalResponseCounterController
}