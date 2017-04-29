var mysql = require("mysql");
var connection;

// if running through heroku, use JAWS DB, and if local then just run off the local mysql db
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    port: 3306,
    host: "localhost",
    user: "root",
    password: "",
    database: "burgers_db"
  });
}

// Make connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("Connection: connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;
