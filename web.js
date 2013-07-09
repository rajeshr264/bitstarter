var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fileContents;
    var fs = require('fs');
    fs.readFileSync('./index.html',function read(err,data) {
	if (err) {
	    return console.log(err);
	}
	fileContents =  new Buffer(data);
    });
		    
    response.send(fileContents.toString());
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
});
