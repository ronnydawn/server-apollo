const knex = require('../../db/knex')
module.exports = {
    id: obj => obj.id,
    email: obj => obj.email,
    password: obj => obj.password,
    token: obj => obj.token
}