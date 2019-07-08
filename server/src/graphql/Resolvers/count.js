const knex = require('../../db/knex')

const resCount = {
   data: obj => obj.data,
   qty: obj => obj.qty
}

module.exports = resCount