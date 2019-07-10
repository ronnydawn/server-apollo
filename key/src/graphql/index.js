const Mutation = require('./Mutation')
const Query = require('./Query')
const User = require('./Resolvers/User')
const Author = require('./Resolvers/Author')

const resolvers = {
  Mutation,
  User,
  Query,
  Author
}

module.exports = { resolvers }