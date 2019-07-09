const knex = require('../../../db/knex')

const authors = () => knex('authors')

module.exports = authors