const db = require('../db/customers')

async function getAllCustomers(req, res , next) {
    try {
        const listCustomers = await db.getAllCustomers();
        res.json({ success: true, listCustomers });
        next()
    }
    catch (error) {
        res.status(400).json({ success: false, error });
    }
}


async function getCustomerByID(req, res , next) {
    try {
        const {id} = req.params;
        const isNumeric = /^\d+$/.test(id);

        if (!Number(id))
            {
                res.status(400).json({ success: false, message : 'Invalid user ID. Must be a numeric digit.' }); 
                next();
                return 
            }
        const customerInformation = await db.getCustomerByID(id);
        res.json({ success: true, customerInformation });
        next()
    }
    catch (error) {
        res.status(400).json({ success: false, error });
        next();
    }
}



module.exports = {
    getAllCustomers,
    getCustomerByID
}