var pool = require("./connection");

module.exports.getLogin = async function(username, password) {
    try{
        let sql = "SELECT idUser, firstName  from dbcatalog.User WHERE username= ? AND password = ?"
        let result = await pool.query(sql, [username, password]);
        console.log = result
        return {status:200, data: result}
    } catch(err) {
        console.log(err);
        return {status:500, data: err};
    }
}

