const Query = require('./Query')
const Mutation = require('./Mutation')
const Book = require('./Resolvers/books')
const Author = require('./Resolvers/authors')
const Count = require('./Resolvers/count')
const DeleteResponse = require('./Resolvers/delete')

const resolvers = {
  Query,
  Mutation,
  Book,
  Author,
  Count,
  DeleteResponse
}

module.exports = { resolvers }