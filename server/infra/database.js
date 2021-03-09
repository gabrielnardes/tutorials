const pgp = require('pg-promise')();
const db = pgp({
    host: 'localhost',
    port: 5432,
    database: 'blog',
    user: 'postgres',
    password: 'postgres',
});

module.exports = db;
