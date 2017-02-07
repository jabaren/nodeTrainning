var EventEmitter = require('events').EventEmitter;
var myEmitter = new EventEmitter;
// functions
var connection = function(id){
// do something
  console.log('client id: ' + id);
};
var message = function(msg){
// do something
  console.log('message: ' + msg);
};
// waiting event
myEmitter.on('connection', connection);
myEmitter.on('message', message);
// send message
myEmitter.emit('connection', 6);
// remove event
myEmitter.removeListener('connection',connection);
// test to send message
myEmitter.emit('connection', 10);
myEmitter.emit('message', 'welcome to nodejs');
