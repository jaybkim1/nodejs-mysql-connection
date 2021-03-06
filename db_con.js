const mysql = require('mysql');
const config = require('./db_config').prod;

module.exports = function () {
    return {
        init: function () {
            return mysql.createConnection({
                host: config.host,
                port: config.port,
                user: config.user,
                password: config.password,
                database: config.database
            })
        },
        test_open: function (con) {
            con.connect(function (err) {
                if (err) {
                    console.error('MySQL Connection Error :' + err);
                } else {
                    console.info('MySQL is Connected Successfully');
                }
            })
        }
    }
};

