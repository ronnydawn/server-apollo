const knex = require('../../db/knex')

const resDelete = {
   success: obj => obj.succ,
   message: obj => obj.mess
}

module.exports = resDelete