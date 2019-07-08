require('dotenv').config()
const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const { importSchema } = require('graphql-import')
const cors = require('cors')
// =================================== USING DUMY DATA
// const typeDefs = require('./graphql/schema')
// const resolvers = require('./graphql/resolvers')


// =================================== USING DB
const { resolvers } = require('./graphql')
const typeDefs = importSchema('./src/graphql/schema.graphql')


console.log(resolvers);

const port = 4000
const server = new ApolloServer({ 
   typeDefs, 
   resolvers })
const app = express()

// allow cross-origin requests
app.use(cors());

server.applyMiddleware({ app })
app.listen({ port: 4000 }, () => 
   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)