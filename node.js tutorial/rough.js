const EventEmitter = require('events');
class MyEmitter extends EventEmitter {}
const myEmitter = new MyEmitter();
myEmitter.on('event', () => {
    console.log("An event has occured"); 
});
myEmitter.emit('event');
