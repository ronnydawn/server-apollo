const knex = require('../../../db/knex')
const addUser = async (_, args) => {
    const user = { ...args }
    await knex('users').insert(user)
    return user
}
module.exports = addUser