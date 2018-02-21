/*var mysql = require('mysql');
var net = require('net');

var con= mysql.createConnection({

    host:'172.17.0.2',
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

});*/

