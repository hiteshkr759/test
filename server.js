var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'hardrock.clxck6b53h74.ap-south-1.rds.amazonaws.com',
  user     : 'root',
  password : 'Hitesh8797',
  database : 'twitterApi',
  port: 3306,
});

connection.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
    console.log('Connected to database.');
    // connection.query('create database ',(err,res)=>{
    //   console.log(err);
    //   if(err) throw err;
    //   console.log('Database created');
    // });
  
    
  });
  
  connection.end();