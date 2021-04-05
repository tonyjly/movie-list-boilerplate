const mysql = require('mysql');
const reference = require('./reference.js');

const connection = mysql.createConnection({
  host     : 'localhost',
  user     : reference.user,
  password : reference.password,
  database : reference.database
});

connection.connect((err) => {
  if (err) console.log(`Error: ${err}`);
  console.log('Connected to MySQL MovieList database');
});

module.exports = connection;