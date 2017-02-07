var serverPort = 9099;
var server = 'localhost';
var net = require('net');

console.log('connecting to server');

var clientNetOptions = {
  server:server,
  port: serverPort
};

var client = net.connect(clientNetOptions, function(){
  console.log('send data to server');
  client.write('greeting from client socket');
});

client.on('data',function(data){
  console.log('received data: '+data.toString());
  client.end();
});

client.on('error',function(err){
  console.log(err);
});

client.on('end',function(){
  console.log('client disconnected...');
});