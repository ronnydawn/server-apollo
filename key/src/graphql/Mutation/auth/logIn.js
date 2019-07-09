const knex = require('../../../db/knex')
const jwt = require("jsonwebtoken");
const SECRET = "createaverystrongsec34!retthatalsoincludes2423412wdsa324e34e";
const pick = require("lodash").pick;
const logIn = async (_, args) => {
    const data = await knex('users').where({ ...args }).select('*').first();
    const token = await jwt.sign(
        {
            user: data.id,
        },
        SECRET,
        // this token will last for a year, this should be adjusted accordingly
        { expiresIn: 1 * 60 }
    )
    return token;
}
module.exports = logIn