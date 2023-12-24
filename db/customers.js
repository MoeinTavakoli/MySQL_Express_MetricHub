const {query} = require('./_connection')
const {ExecutionTimeOneUserExposer , ExecutionTimeAllUserExposer} = require('./metric')
async function getAllCustomers() {
    try {
        const start = Date.now();
        const result = await query('SELECT * FROM customers')
        const end = Date.now();
        ExecutionTimeAllUserExposer(end-start)
        console.log(result);
        return result
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getCustomerByID(customerID) {
    try {
        const start = Date.now();
        const result = await query(`SELECT * FROM customers WHERE customerNumber = ${customerID} LIMIT 1`)
        const end = Date.now();
        ExecutionTimeOneUserExposer(end-start)
        console.log(result);
        return result
    } catch (error) {
        console.error(error);
        throw error;
    }
}


module.exports={
    getAllCustomers,
    getCustomerByID
}