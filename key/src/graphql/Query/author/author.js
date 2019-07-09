const knex = require('../../../db/knex')

const author = async (_, args) => {
    const data = await knex('authors').where({ ...args }).select('*');
    return data;
}

module.exports = author