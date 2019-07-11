const knex = require('../../db/knex')
module.exports = {
    token: obj => obj.token,
    email: obj => obj.email,
    iat: obj => obj.iat,
    exp: obj => obj.exp,
}