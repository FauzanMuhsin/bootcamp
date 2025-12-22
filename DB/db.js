const {Pool} = require('pg')

require('dotenv').config();
// npm i dotenv
// untuk menyembunyikan environment dalam pool
// simpen value pool di file .env

const pool = new Pool({
    user: "postgres",
    password: "yogyakartay2k",
    database: "db_contact",
    host: "localhost",
    port: 5432
})

module.exports = pool