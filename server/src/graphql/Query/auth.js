const knex = require('../../db/knex')
const jwt = require("jsonwebtoken");
const SECRET = "createaverystrongsec34!retthatalsoincludes2423412wdsa324e34e";
const logIn = async (_, args) => {
    const data = await knex('users')
                        .where({ ...args })
                        // .first()
   //  console.log(data)
    const token = await jwt.sign(
        {
            id: data.id,
            email: data.email
        },
        SECRET,
        { expiresIn: 1 * 60 }
    )

    verifyToken = await jwt.verify(token, SECRET);
    
    data.token = token

    const result = {
        token: token,
        email: data.email,
        iat: verifyToken.iat,
        exp: verifyToken.exp
    }
   var obj = []
   obj[0] = result;

   //  var result1 = obj.push("RowDataPacket ")

    console.log(data)
    return data;
}
module.exports = {logIn}