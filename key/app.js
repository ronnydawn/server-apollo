const express = require('express')
const jwt = require("jsonwebtoken");
const { ApolloServer } = require('apollo-server-express')
const { importSchema } = require('graphql-import')
const { resolvers } = require('./src/graphql')
const typeDefs = importSchema('./src/graphql/schema.graphql')
const SECRET = "createaverystrongsec34!retthatalsoincludes2423412wdsa324e34e";

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

server.applyMiddleware({ app })
app.get('/test', (req, res) => {
    const Excel = require('exceljs');

    var workbook = new Excel.Workbook();
    var workbook = new Excel.Workbook();
    var worksheet = workbook.addWorksheet('Discography');

    // add column headers
    worksheet.columns = [
        { header: 'Album', key: 'album' },
        { header: 'Year', key: 'year' }
    ];

    // add row using keys
    worksheet.addRow({ album: "Taylor Swift", year: 2006 });

    // add rows the dumb way
    worksheet.addRow(["Fearless", 2008]);

    // add an array of rows
    var rows = [
        ["Speak Now", 2010],
        { album: "Red", year: 2012 }
    ];
    worksheet.addRows(rows);

    // edit cells directly
    worksheet.getCell('A6').value = "1989";
    worksheet.getCell('B6').value = 2014;

    // save workbook to disk
    workbook.xlsx.writeFile('taylor_swift.xlsx').then(function () {
        console.log("saved");
    });

    res.send('Hello World!')
})
app.listen({ port: 4000 }, () =>
    console.log(`🚀 Server ready at http://localhost:4000${server.graphqlPath}`)
)