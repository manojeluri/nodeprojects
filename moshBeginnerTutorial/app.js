const EventEmitter = require('events');
const Logger = require('./logger');
const logger = new Logger();
//register a listener
//this block of code only runs after logger.log is called.
logger.on('messageLogged', (arg)=>{
    
    console.log("Listener called", arg);
});


logger.log("message");
