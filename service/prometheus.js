const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;

const Registry = client.Registry;
let register = new Registry();

const requestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'status'],
  });
  

collectDefaultMetrics({ register });


module.exports = {
    register,
    requestCounter
}