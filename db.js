const mysql = require('mysql2');

// create the connection to database
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'sunil',
    password:'Sunil@1994',
    database: 'blogpost'
});
// simple query
connection.query(
    "SELECT 'test sql'",
    function(err, results, fields) {
        console.log('sql connected'); // results contains rows returned by server
        //   console.log(results); // results contains rows returned by server
        //   console.log(fields); // fields contains extra meta data about results, if available
    }
    );
exports.dbConnection = connection;