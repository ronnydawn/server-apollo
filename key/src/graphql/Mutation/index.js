const logIn = require('./auth/logIn')
const addUser = require('./user/addUser')
const addAuthor = require('./author/addAuthor')

const Mutation = {
    addUser,
    addAuthor,
    logIn
}

module.exports = Mutation
