const knex = require('../../db/knex')

const books = () => knex('books')

module.exports = books