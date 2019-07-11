require('dotenv').config()
const express = require('express')
const cookieParser = require('cookie-parser')
const jwt = require("jsonwebtoken");
const SECRET = "createaverystrongsec34!retthatalsoincludes2423412wdsa324e34e";
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
   resolvers,
   context: async ({ req }) => {
      const token = await req.headers["authentication"];
      let user;
      try {
         user = await jwt.verify(token, SECRET);
         console.log(`${user.user} user`);
      } catch (error) {
         console.log(`${error.message} caught`);
      }
      return {
         user,
         SECRET
      };
   }
    })
const app = express()

const addUser = async (req, res, next) => {
   // const token = req.cookies.token
   console.log(req.cookies)
}

// allow cross-origin requests
app.use(
   cors({
      origin: 'http://localhost:3000',
      credentials: true
   })
);
app.use(cookieParser());
// app.use(addUser)
app.get('/cook', function (req, res) {
  // Cookies that have not been signed
  console.log('Cookies: ', req.cookies)
 
  // Cookies that have been signed
  console.log('Signed Cookies: ', req.signedCookies)
})

app.get('/status', (req, res, next) => res.sendStatus(200));

server.applyMiddleware({ app })
app.listen({ port: 4000 }, () => 
   console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)