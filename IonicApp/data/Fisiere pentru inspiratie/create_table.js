var createTable = function createTable(tableToCheck, sql = null){
    var tableExist = require('./check_table.js');
    var db = require('./connect_database.js');

    if(tableExist(tableToCheck) !== null && sql != null){
        db.query(sql, err =>{
            if(err){ 
                console.log('Table ' + tableToCheck + ' is already existing');
            }
            else{
                console.log('Table ' + tableToCheck + ' was created');
            }
        })
    }
};

module.exports = createTable;