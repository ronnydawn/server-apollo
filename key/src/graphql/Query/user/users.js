const knex = require('../../../db/knex')

const users = (_, args, { user }) => {
    console.log(user);
    if (!user) {
        throw new Error("You are not logged in to access this information ");
    }
    return knex('users');
}

module.exports = users