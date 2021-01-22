
var tableExist = function tableExist(table){
    var db = require('./connect_database.js');

    let sql = 'SELECT 1 FROM ' + table + ' LIMIT 1;';
    db.query(sql, err =>{
        if(err) console.log('The Table ' + table + ' don\'t exist');
        return !err;
    });
}

module.exports = tableExist;
