// Get the client
const mysql = require('mysql2');

// Create the connection to database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'Youtube',
  dateString : true
});

// A simple SELECT query
connection.query(
    'SELECT * FROM `users`',
    function (err, results, fields) {
    var {id, email, name, created_at} = results[4];
      console.log(`${id}, ${email}, ${name}, ${registered_time}`); // results contains rows returned by server
    }
  );
