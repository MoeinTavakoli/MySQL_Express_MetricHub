const {queryExecAllDuration , register} = require('../service/prometheus')

async function ExecutionTimeAllUserExposer (duration)  {
    queryExecAllDuration.set({}, duration )
    await register.registerMetric(queryExecAllDuration); // register metric manually
}


module.exports = {
    ExecutionTimeAllUserExposer
}