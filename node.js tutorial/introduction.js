var http = require("http");
http.createServer(function(req, res){
    res.writeHead(200); //status code in header
    res.write("Introduction");
    res.end();
}).listen(3000);
console.log("Listening on port 3000");