const knex = require('../../db/knex')

const users = async (_, args, { user }) => {
    var limit = null, offset = null, excel = false;
    // if (!user) {
    //     throw new Error("You are not logged in to access this information ");
    // }
    if (args.excel == true) {
        excel = args.excel;
        delete args.excel;
    } else if (args.excel == false) {
        delete args.excel;
    }
    if (args.limit) {
        limit = args.limit;
        delete args.limit;
    }
    if (args.offset) {
        offset = args.offset;
        delete args.offset;
    }
    const data = await knex('users').limit(limit).offset(offset)

    if (excel) {
        const item = Object.keys(data[0])
        var columns = [];
        const Excel = require('exceljs');

        var workbook = new Excel.Workbook();
        var worksheet = workbook.addWorksheet('Sheet 1');
        item.map(data => {
            columns.push({
                "header": data,
                "key": data
            });
        });
        worksheet.columns = columns;
        var rows = data;
        worksheet.addRows(rows);
        workbook.xlsx.writeFile('test.xls').then(function () {
            console.log("saved");
        });
    }
    return data;
}

const user = async (parent, args, { users }) => {
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

    return await knex('users').select(
        'id',
        'email',
        'password')
        // .innerJoin('authors','books.authorid','authors.id')
        .where({ ...args }).limit(limit).offset(offset)
}

module.exports = {
    users,
    user
}