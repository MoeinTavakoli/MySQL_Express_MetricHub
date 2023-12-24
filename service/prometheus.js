const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;

const Registry = client.Registry;
let register = new Registry();

const requestCounter = new client.Counter({
    name: 'http_requests_total',
    help: 'Total number of HTTP requests',
    labelNames: ['method', 'status'],
  });
  
const queryExecAllDuration = new client.Gauge({
    name: 'database_query_exec_all_record_duration_ms',
    help: 'Duration of the database query exec for all records in ms',
  });

  const queryExecOneDuration = new client.Gauge({
    name: 'database_query_exec_one_record_duration_ms',
    help: 'Duration of the database query exec for one record in ms',
  });


  collectDefaultMetrics({ register });


module.exports = {
    register,
    requestCounter,
    queryExecAllDuration,
    queryExecOneDuration,
}