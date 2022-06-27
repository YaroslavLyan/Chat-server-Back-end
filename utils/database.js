const keys = require('./config');

const knex = require('knex')({
    client: 'pg',
    connection: {
      connectionString: keys.uri,
      ssl: { rejectUnauthorized: false }
    }
  });

module.exports = knex;