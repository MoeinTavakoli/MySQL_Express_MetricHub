// add prometheus register 
const register = require('../service/prometheus.js')


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

module.exports={
    metrics
}