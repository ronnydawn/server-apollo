const {books, countBookAuthor, book} = require('./books')
const {authors, author} = require('./authors')
const {user, users} = require('./users')
const {logIn} = require('./auth')

const Query = {
  books,
  countBookAuthor,
  book,
  authors,
  author,
  user,
  users,
  logIn
}

module.exports = Query
