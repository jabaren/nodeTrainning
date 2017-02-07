var http = require('http');
var port = 8084;

var server = http.createServer(function(req,res){

  // print request header
  console.log(req.headers);

  // set response header
  res.setHeader('AppId','123456');

  // send response
  res.write('Welcome to http nodejs');
  res.end();

});

server.listen(port);
console.log('Server is running on port:'+port);