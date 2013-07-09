var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fileContents = new Buffer(100);
    var fs = require('fs');
    fs.readFileSync("./index.html","ascii", function read(err,data) {
	if (err) {
	    return console.log(err);
	}

	fileContents.write(data,"ascii");
	console.log(fileContents.toString("ascii"));
    });
		    
    console.log(fileContents.toString("ascii"));
    response.send(fileContents.toString("ascii"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
}); 
