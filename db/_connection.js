const mysql = require('mysql2/promise');
const config = require('../config');

const pool = mysql.createPool(config.db);

async function connection() {
	const connection = await mysql.createConnection(configDB.db);
	return connection;
}

async function query(sql, params) {
	try {
		const [ rows, fields ] = await pool.execute(sql, params);
        return rows;
	} catch (error) {
		throw error;
	}
}


module.exports = {
	query,
	connection
};  