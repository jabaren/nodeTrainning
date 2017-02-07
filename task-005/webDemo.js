var http = require('http');
var port = 8084;

var server = http.createServer(function(req,res){
  res.write('Welcome to http nodejs');
  res.end();
});

server.listen(port);
console.log('Server is running on port:'+port);