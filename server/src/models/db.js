var mysql = require('mysql');
require('../../../.env')

var connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: `${process.env.SQL_SECRET}`,
    database: 'newdb'
});

connection.connect(function (err) {
    if (err) throw err
    console.log('You are now connected with mysql database...')
})

module.exports = connection;