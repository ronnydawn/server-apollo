const knex = require('../../db/knex')

const authors = async () => {
   return await knex('authors').select(
      'authors.id as authorid',
      'authors.name as authorname',
      'authors.age')
      // .leftJoin('books','authors.id','books.authorid')
   // return await knex('authors')
   }

const author = async (_, args) => {
   const item = Object.keys(args)

   var arr = []
   var obj = {}

   item.map(data =>{
      
      if (data == "name") {
         var ref = "authors.name"
      } else if (data == "id") {
         var ref = "authors.id"
      }
      obj[ref] = args[data]
      arr.push(obj)

   })

   return await knex('authors').select(
      'authors.id as authorid',
      'authors.name as authorname',
      'authors.age')
      // .leftJoin('books','authors.id','books.authorid')
      .where({...obj})
}

module.exports = {
   authors,
   author}