const books = require('../db/dumy/books')
// console.log(books);

const resolvers = {
   Query: {
      books: () => books,
   },
}

module.exports = resolvers