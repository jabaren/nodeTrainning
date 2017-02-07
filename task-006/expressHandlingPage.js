var express = require('express');
var app = express();
var port = 8084;

app.get('/', function(req, res){
  res.send('Hello World Expressjs');
});
app.get('/customer', function(req, res){
  res.send('customer page');
});
app.get('/admin', function(req, res){
  res.send('admin page');
});

app.listen(port);
console.log('Server is running on port:'+port);