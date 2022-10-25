// const mongoose = require("mongoose");
// const { CONNECTION_STRING } = require("../config");
// const { Schema } = mongoose

// mongoose
//   .connect(CONNECTION_STRING, {
//     useNewUrlParser: true,
//     useUnifiedTopology: true,
//   })
//   .then(() => {
//     console.log("Database connected");
//   })
//   .catch((err) => {
//     console.error(err);
//   });

// module.exports = mongoose

const mysql = require('mysql');
const {database} = require('./keys');
const pool = mysql.createPool(database);
const {promisify} = require('util')

pool.getConnection((err, connection) => {
    if(err){
        if(err.code === 'PROTOCOL_CONNECTION_LOST'){
            console.error('DATABASE CONNECTION WAS CLOSED');
        }
        if(err.code === 'ER_CON_COUNT_ERROR'){
            console.error('DATABASE HAS TO MANY CONNECTION');
        }
        if(err.code === 'ECONNREFUSED'){
            console.error('DATABASE CONNECTION WAS REFUSED');
        }
    }

    if(connection) connection.release();
    console.log('DATABASE IS CONNECTED')
    return;
});

//Promisify pool query
pool.query = promisify(pool.query)

module.exports = pool;