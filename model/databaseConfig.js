var mysql = require('mysql');
var dbconnect = {
    getConnection: function () {
        var conn = mysql.createConnection({
            host: "localhost",
            user: "root",
            password: "Password123",
            database: "islandfurniture-it07"
        });
        return conn;
    }
};
module.exports = dbconnect