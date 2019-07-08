const knex = require('../../db/knex')

const books = async () => {
   //  console.log(await knex('books'))
   // return knex('books')
   return await knex('books')
  }

const countBookAuthor = async (_, args) => {
   var data = args.data
   
   return await knex('v_countBookAuthor')
               .select('data','qty').where({'data':data})

}

const book = async (parent, args, context, info) => {

   const item = Object.keys(args)

   var arr = []
   var obj = {}

   item.map(data =>{
      
      if (data == "id") {
         var ref = "books.id"
      } else if (data == "name") {
         var ref = "books.name"
      } else if (data == "authorid") {
         var ref = "authorid"
      }
      obj[ref] = args[data]
      arr.push(obj)

   })

   return await knex('books').select(
      'id',
      'name',
      'authorid',
      'genre')
      // .innerJoin('authors','books.authorid','authors.id')
      .where({...args})
}

module.exports = {
   books,
   countBookAuthor,
   book
   }