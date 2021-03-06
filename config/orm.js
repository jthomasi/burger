var connection = require('../config/connection.js');

// Helper function for SQL syntax
function printQuestionMarks(num) {
  var arr = [];
  for (var i = 0; i < num; i++) {
    arr.push("?");
  }
  return arr.toString();
}
// Helper function for SQL syntax
function objToSql(ob) {
  var arr = [];
  for (var key in ob) {
    if (Object.hasOwnProperty.call(ob, key)) {
      arr.push(key + "=" + ob[key]);
    }
  }
  return arr.toString();
}

var orm = {

	selectAll : function(table,cb) {
		var queryString = "SELECT * FROM "+table+";";

		console.log("Orm: "+queryString);

		connection.query(queryString, function(err, result) {
			if (err) throw err;
			cb(result);
		});
	},
	insertOne : function(table,cols,vals,cb) {
		var queryString = "INSERT INTO "+table+" (";
		queryString += cols.toString()+") ";
		queryString += "VALUES (";
		queryString += printQuestionMarks(vals.length);
		queryString += ")";

		console.log("Orm: "+queryString);

		connection.query(queryString, vals, function(err, result){
			if (err) throw err;
			cb(result);
		});
	},	
	updateOne : function(table, colVals, condition, cb) {
		var queryString = "UPDATE "+table;
		queryString += " SET ";
		queryString += objToSql(colVals);
		queryString += " WHERE ";
		queryString += condition;

		console.log("Orm: "+queryString);

		connection.query(queryString, function(err, result){
			if (err) throw err;
			cb(result);
		});
	}
};

module.exports = orm;