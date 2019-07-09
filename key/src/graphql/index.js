const Mutation = require('./Mutation')
const Query = require('./Query')
const User = require('./resolvers/User')
const Author = require('./resolvers/Author')

const resolvers = {
  Mutation,
  User,
  Query,
  Author
}

module.exports = { resolvers }