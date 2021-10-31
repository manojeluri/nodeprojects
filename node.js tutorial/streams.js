/* Streams
 When writing applications that depend consistently on network access or accessing files on the disk,
 it is important to understand and optimize how the data is being transferred,
 this is an excellent use-case for Node.js.
 Stream:
 - Streams are like channels, where data flows through
 - There are two main different types: readable and writeable
 - Readable stream: Inherits from EventEmitter
 */
var http = require('http');
// 'request' is a readable stream
// 'response' is a writeable stream
http.createServer(function(req, res){
    res.writeHead(200);
    req.on()
})