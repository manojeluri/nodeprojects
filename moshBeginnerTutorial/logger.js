const EventEmitter = require('events');

class Logger extends EventEmitter {
    log(message) {
        //send an http request
        console.log(message);
        //emitter is an object
        this.emit('messageLogged',{id:1,url:"http://"}); //signaling that an event has happened
    }
}
module.exports = Logger;