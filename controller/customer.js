const db = require('../db/customers')

async function getAllCustomers(req, res) {
    try {
        const listCustomers = await db.getAllCustomers();
        res.json({ success: true, listCustomers });
    }
    catch (error) {
        res.status(400).json({ success: false, error });
    }
}


async function getCustomerByID(req, res) {
    try {
        const {id} = req.params;
        const customerInformation = await db.getCustomerByID(id);
        res.json({ success: true, customerInformation });
    }
    catch (error) {
        res.status(400).json({ success: false, error });
    }
}



module.exports = {
    getAllCustomers,
    getCustomerByID
}