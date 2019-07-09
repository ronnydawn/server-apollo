const knex = require('../../../db/knex')

const user = (_, { id }) => knex('users').where({
    id: id
}).select('*');

module.exports = user