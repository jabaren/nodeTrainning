var EventEmitter = require('events').EventEmitter;
var myEmitter = new EventEmitter;

myEmitter.once('message', function(msg){
// do something
  console.log('message: ' + msg);
});

myEmitter.emit('message', 'this is the first message');
myEmitter.emit('message', 'this is the second message');
myEmitter.emit('message', 'welcome to nodejs');
