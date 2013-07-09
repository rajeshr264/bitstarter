var express = require('express');

var app = express.createServer(express.logger());

app.get('/', function(request, response) {
    var fs = require('fs');
    var filename = fs.readFileSync("./index.html","ascii", function read(err,data) {
	if (err) {
	    return console.log(err);
	}
    })
    var buf = new Buffer(filename);
    console.log(buf.toString("ascii"));
    response.send(buf.toString("ascii"));
});

var port = process.env.PORT || 5000;
app.listen(port, function() {
  console.log("Listening on " + port);
}); 
