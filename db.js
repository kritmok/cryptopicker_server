const Pool = require("pg").Pool;

const pool = new Pool({
    user: "input",
    password: "input",
    host: "input",
    port: 5432,
    database: "cryptopicker"
});

module.exports = pool;