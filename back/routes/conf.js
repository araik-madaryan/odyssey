const mysql = require('mysql');

const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'armenia33',
  database: 'formulaire'
});

module.exports = connection;
