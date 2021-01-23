var connection = require("../config/connection");

var orm = {
    selectAll: function(tableInput, cb) {
        var queryString = "SELECT * FROM " + tableInput + ";";

        connection.query(queryString, function(err, res) {
            if (err) throw err;
            cb(res);
        });
    },
    insertOne: function(tableInput, val, cb) {
        connection.query("INSERT INTO " + tableInput + " (burger_name) VALUES ('" + val + "');",
        function(err, result) {
            if (err) throw err;
            cb(result);
        })
    },
    updateOne: function(tableInput, condition, cb) {
        connection.query("UPDATE " + tableInput + " SET devoured=true WHERE id=" + condition + ";", function(err, res) {
            if (err) throw err;
            cb(res);
        })
    }
};


module.exports = orm;
