const knex = require('../../db/knex')

const resAuthor = {
   id: obj => obj.authorid,
   name: obj => obj.authorname,
   age: obj => obj.age,
   books: obj => 
      knex('books')
         // .leftJoin('authors','authors.id','books.authorid')
         .where({ authorid: obj.authorid })
}

module.exports = resAuthor