const mysql = require('mysql2');

// Create a connection to the database
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'your_database_user',
  password: '1234',
  database: 'boomit'
});

module.exports = connection;
