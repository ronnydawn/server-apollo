const knex = require('../../db/knex')
const qBooks = require('../Query/books')

// console.log(qBooks)
// args = berisi "name: String, genre: String" 
// pada file schema.graphql

const addBook = async (_, args) => {
   // console.log(qBooks.checkBook())
   const createdAt = knex.fn.now()
   const updatedAt = knex.fn.now()
   const colBook = {...args, createdAt, updatedAt}
   // console.log(knex('books').insert(colBook))
   await await knex('books').insert(colBook)
   console.log(await knex('books')
      .select(
         'id',
         'name',
         'genre',
         'authorid')
      .where({name:args.name}))
   return await knex('books')
      .select(
         'id',
         'name',
         'genre',
         'authorid')
      .where({name:args.name})
}

const deleteBook = async (_, args) => {
   var id = args.id
   var name = args.name
   var getBook = JSON.parse(JSON.stringify(await knex("books").where({...args})))
   // getName = JSON.parse(book)
   console.log(getBook.length)

   if (typeof id === "undefined") {
      var cond = {"name":name}
      var mess = "This Book Name:'"+name
   } else if (typeof name === "undefined") {
      var cond = {"id":id}
      var mess = "This ID:'"+id
   } else {
      var cond = {"id":id,"name":name}
      var mess = "This Book Name:'"+name
   }

   if (getBook.length === 0) {
      return (
         {
            "succ": 0,
            "mess": mess+"' doesnt exist.."
         }
      )
   } else {
      await knex("books").where(cond).del()
      return (
         {
            "succ": 1,
            "mess": mess+"' has been deleted.."
         }
      )
   }
   
}

module.exports = {
   addBook,
   deleteBook
   }