// call needed modules
var express = require('express');
var fs = require('fs');
var path = require('path');
var app = express();

// make root folder content public to access
app.use(express.static('./'));

// define root / actions
app.get('/', function(req, resp) {
	var indexPath = path.resolve('index.html');
	fs.readFile(indexPath, function(err, content) {
		if(err) {
			console.log(err);
		}
		resp.send(content.toString());
	});
});

// set server port and start it
var server = app.listen(8081, function() {
	
	var host = server.address().address;
	var port = server.address().port;
	
	console.log("Server listening in http://%s:%s", host, port);
});