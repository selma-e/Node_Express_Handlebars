var mysql = require("mysql");

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "", //place password in between the quotes
    database: "burgers_db"
});

connection.connect(function (err) {
    if (err) throw err;
    console.log("connected as id " + connection.threadId);
    connection.end();
});

module.exports = connection;