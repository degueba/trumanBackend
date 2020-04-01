const knex = require('knex');
const configuration = require('../../knexfile');

const connection = knex(configuration.production);

console.log('Running on http://localhost:3333')

module.exports = connection;