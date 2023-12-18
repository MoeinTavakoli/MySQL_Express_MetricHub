const {query} = require('./_connection')

async function getAllCustomers() {
    try {
        const result = await query('SELECT * FROM customers')
        console.log(result);
        return result
    } catch (error) {
        console.error(error);
        throw error;
    }
}

async function getCustomerByID(customerID) {
    try {
        const result = await query(`SELECT * FROM customers WHERE customerNumber = ${customerID} LIMIT 1`)
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