var express = require('express');
var app = express();
var port = 8084;

app.get('/', function(req,res){
    res.send('Hello World Expressjs');
});

app.listen(port);
console.log('Server is running on port:'+port);
