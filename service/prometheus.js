const client = require('prom-client');
const collectDefaultMetrics = client.collectDefaultMetrics;

const Registry = client.Registry;
let register = new Registry();

const requestCounter = new client.Counter({
    name: 'http_response_status_code_total',
    help: 'Total number statusCode of HTTP response',
    labelNames: ['method', 'status'],
  });
const responseTime = new client.Gauge({
    name: 'http_response_time_ms',
    help: 'time of HTTP response in ms',
    labelNames: ['method', 'status'],
  });
  const totalResponseCounter = new client.Summary({
    name: 'http_total_response_time_ms',
    help: 'total number of HTTP response in ms',
    labelNames: ['method'],
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
    responseTime,
    totalResponseCounter,
}