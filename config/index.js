require('dotenv').config()


const config = {
    db: {
        host: process.env.DATABASE_HOST,
        user: process.env.DATABASE_USER ,
        password: process.env.DATABASE_PASSWORD ,
        database : process.env.DATABASE_NAME , 
        authPlugin: 'mysql_nativ`e_password' 

    } , 
    server : 
    {
        port : process.env.SERVER_PORT || 3001
    }
}

module.exports = config