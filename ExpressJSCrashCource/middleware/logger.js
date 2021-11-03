const moment = require('moment');
//simple middleware function
//next is called last, when you call next you will move to the next middleware function on the stack
const logger = (req, res, next) => {
    console.log(`${req.protocol}://${req.get('host')}${
        req.originalUrl}: ${
            moment().format()}`);
    next();
};

module.exports = logger;