// Get all of our friend data
var data = require('../data.json');

exports.view = function(req, res){
	console.log(data); //Prints the information on the terminal window
	res.render('index', data);
};