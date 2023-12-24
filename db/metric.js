const {queryExecOneDuration, queryExecAllDuration , register} = require('../service/prometheus')

async function ExecutionTimeAllUserExposer (duration)  {
    queryExecAllDuration.set({}, duration )
    await register.registerMetric(queryExecAllDuration); // register metric manually
}

async function ExecutionTimeOneUserExposer (duration)  {
    queryExecOneDuration.set({}, duration )
    await register.registerMetric(queryExecOneDuration); // register metric manually
}

module.exports = {
    ExecutionTimeAllUserExposer,
    ExecutionTimeOneUserExposer,
}