var express = require("express");
var router = express.Router();

var burger = require("../models/burger.js");

router.get("/", function(req, res){
	burger.selectAll(function(data){
		var burgerObj = {
			burgers: data
		};
		console.log("Controller: "+burgerObj);
		res.render("index", burgerObj);
	});
});
router.post("/", function(req, res){
	burger.insertOne([
		"burger_name", "devoured"
	], [
		req.body.burger_name, req.body.devoured
	], function() {
		res.redirect("/");
	});
});
router.put("/:id", function(res, req){
	var condition = "id = "+req.params.id;

	console.log("Controller: "+condition);

	burger.updateOne({
		devoured: req.body.devoured
	}, condition, function(){
	  	res.redirect("/");
	});
});

module.exports = router;