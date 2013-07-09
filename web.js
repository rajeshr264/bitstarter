var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fileContents = new Buffer(100);
    var fs = require('fs');
    fs.readFileSync('./index.html','utf-8', function read(err,data) {
	if (err) {
	    return console.log(err);
	}

	fileContents.write(data,"utf-8");
	console.log(fileContents.toString("utf-8"));
    });
		    
    response.send(fileContents.toString("utf-8"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
