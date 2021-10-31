var events = require('events');
var eventEmitter = events.EventEmitter;
var logger = new eventEmitter();
logger.on('error',function(message){
    console.log("ERR: "+message);
});
logger.emit("error", 'This is the first error');
logger.emit("error", 'This is the second error');