const knex = require('../../db/knex')

const resBook = {
   id: obj => obj.id,
   name: obj => obj.name,
   genre: obj => obj.genre,
   author: obj => 
      knex('authors')
         .select(
            'authors.id as authorid',
            'authors.name as authorname', 
            'age')
         .where({ 'authors.id': obj.authorid }),
}

module.exports = resBook