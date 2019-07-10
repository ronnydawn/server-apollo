const knex = require('../../db/knex')

const authors = async (_, args, { user }) => {
    // if (!user) {
    //     throw new Error("You are not logged in to access this information ");
    // }
    return await knex('authors')
}

const author = async (parent, args, { user }) => {
    // if (!user) {
    //     throw new Error("You are not logged in to access this information ");
    // }
    var limit = null, offset = null;
    if (args.limit) {
        limit = args.limit;
        delete args.limit;
    }
    if (args.offset) {
        offset = args.offset;
        delete args.offset;
    }
    const item = Object.keys(args)
    var arr = [];
    var obj = {};

    item.map(data => {
        if (data == "id") {
            var ref = "author.id";
        } else if (data == "name") {
            var ref = "author.name";
        } else if (data == "idUser") {
            var ref = "idUser"
        }
        if (data == "limit" && data == "offset") {

        } else {
            obj[ref] = args[data];
            arr.push(obj);
        }
    })

    return await knex('authors').select(
        'id',
        'name',
        'title',
        'idUser')
        // .innerJoin('authors','books.authorid','authors.id')
        .where({ ...args }).limit(limit).offset(offset)
}

module.exports = {
    authors,
    author
}