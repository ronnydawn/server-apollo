const knex = require('../../../db/knex')
const addAuthor = async (_, args) => {
    const author = { ...args }
    await knex('authors').insert(author)
    return author
}
module.exports = addAuthor