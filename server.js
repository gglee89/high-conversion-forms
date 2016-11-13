var express = require('express');
var app = express();
var path = require('path');

app.use("/", express.static('app'));

app.get('/', function(req, res) {
	res.sendFile(__dirname + '/app/index.html');
});

app.listen(3000);
console.log("listening to port 3000");
