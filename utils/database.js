const keys = require('./config');

const knex = require('knex')({
    client: 'pg',
    connection: keys.uri
  });

module.exports = knex;