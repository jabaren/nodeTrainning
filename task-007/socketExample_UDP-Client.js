var dgram = require('dgram');
var client = dgram.createSocket('udp4');

var server = 'localhost';
var serverPort = 9094;

var message = new Buffer("this is client message");

client.send(message, 0, message.length, serverPort, server, err => {
  if(err){
    console.log(err);
  }else{
    client.close();
  }
});
