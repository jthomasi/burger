var connection = require('./config/connection.js');

function printQuestionMarks(num) {
  var arr = [];

  for (var i = 0; i < num; i++) {
    arr.push("?");
  }

  return arr.toString();
}

var orm = {

	selectAll : function(table,cb) {
		var queryString = "SELECT * FROM "+table+";";
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


	},	
	updateOne : function() {

	}
};

module.exports = orm;