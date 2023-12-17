const { createConnection} = require('mysql');
const config = require('../config')

async function connectionDatabase(dbConfig) {
    try {

        const pool = await createConnection( dbConfig )                  
        console.info("database connected ...")
        return pool
        
    } catch (error) {
        console.error(error);
        return error
    }
}



const pool = connectionDatabase();

module.exports = pool