var fs = require('fs');
var https = require('https');
var express = require('express');
var app = express();

var options = {
  key: fs.readFileSync('E:/ssl/myserver.key'),// CHANGE THIS PART WITH YOUR KEYS
  cert: fs.readFileSync('E:/ssl/myserver.crt'),
  passphrase: '1234'
};

app.get('/', function(req, res){
  res.send('Hello World Expressjs');
});

var server = https.createServer(options, app);
server.listen(8084);
console.log('Server is running on port 8084');