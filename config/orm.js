var connection = require("./connection.js");

var orm = {
    selectAll: function (tableName, cb) {
        var queryString = "SELECT * FROM ??";
        connection.query(queryString, [tableName], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    insertOne: function (tableName, values, cb) {
        var queryString = "INSERT INTO ?? SET ?"
        connection.query(queryString, [tableName, values], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
    updateOne: function (tableName, values, id, cb) {
        var queryString = "UPDATE ?? SET ? WHERE ID=?"
        connection.query(queryString, [tableName, values, id], function (err, result) {
            if (err) throw err;
            cb(result);
        });
    },
};

module.exports = orm;