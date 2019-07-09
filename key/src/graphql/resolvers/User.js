const knex = require('../../db/knex')
module.exports = {
    id: obj => obj.id,
    email: obj => obj.email,
    password: obj => obj.password,
    author: obj => knex('authors').where({ idUser: obj.id }).first(),
}