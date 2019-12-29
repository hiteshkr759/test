var mysql      = require('mysql');
var connection = mysql.createConnection({
  host     : 'twt-me.clxck6b53h74.ap-south-1.rds.amazonaws.com',
  user     : 'admin',
  password : 'Hitesh8797',
  database : 'twt-me',
  port: 3306
});

connection.connect(function(err) {
    if (err) {
      console.error('Database connection failed: ' + err.stack);
      return;
    }
  
    console.log('Connected to database.');
  });
  
  connection.end();