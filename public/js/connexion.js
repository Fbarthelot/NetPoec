var mysql = require('mysql');
var net = require('net');

var con= mysql.createConnection({

    host:'localhost',
    user:'root',
    password:'poec',
    database:'dbProfile'
});


con.connect(function(err){
    if(err)throw err;
    console.log("connected!")


  let sqlquery="SELECT * FROM Profil";

    con.query(sqlquery, function(err,result,fields){
        if(err)throw err;
        console.log("result"+result)
    });

});


/*    config = require('./mySQLConfig.js'),
    tunnel = require('tunnel-ssh');*/

/*
var connection = module.exports = function(){};
*/

/*
createDBConnection = function(){


    var mysqlConnection = mysql.createConnection({

        host: config.databaseConfig.host,
        user: config.databaseConfig.username,
        password: config.databaseConfig.password,
        database: config.databaseConfig.database,
        connectTimeout: config.databaseConfig.timeout
    });

    return mysqlConnection;
};*/
//
//connection.invokeQuery = function(sqlQuery){
//
//    var data = undefined;
//
////    var sshTunnel = tunnel(config.sshTunnelConfig, function(error, result) {
//
//        var sqlConnection = createDBConnection();
//
//        sqlConnection.connect(function (err) {
//            console.log(err.code);
//        });
//        sqlConnection.on('error', function (err) {
//            console.log(err.code);
//        });
//
//        data = sqlConnection.query({
//            sql: sqlQuery,
//            timeout: config.mySQLConfig.timeout
//        }, function (err, rows) {
//
//            if (err && err.code) {
//                console.log("error code: " + err.code)
//            }
//            if (err) {
//                console.error("error stack: " + err.stack)
//            }
//            ;
//
//            if (rows) {
//                console.log("We have Rows!!!!!!")
//            }
//        });
//
//        sqlConnection.destroy();
////    });
//
//    return data;
//};
