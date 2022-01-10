const mysql = require('mysql');

const config = {
    host: "sql.cookiegmvn.xyz",
    user: "aiobot_api",
    password: "hTNXfbM7z7Ev5PTR",
    database: "aiobot_db",
    supportBigNumbers: true,
    bigNumberStrings: true,
    multipleStatements: true,
    charset: "utf8mb4_general_ci"
}

const pool = mysql.createPool(config)
exports.con = pool
exports.mysql = mysql