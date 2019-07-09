const knex = require('../../db/knex')
module.exports = {
    id: obj => obj.id,
    name: obj => obj.name,
    title: obj => obj.title,
    idUser: obj => obj.idUser,
    user: obj => knex('users').where({ id: obj.idUser }).select('*'),
}