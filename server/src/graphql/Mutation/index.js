const {addBook, deleteBook} = require('./books')
const {logIn} = require('./auth')

const Mutation = {
  addBook,
  deleteBook,
  logIn
}

module.exports = Mutation
