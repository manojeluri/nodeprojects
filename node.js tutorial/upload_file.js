var fs = require('fs');
var http = require('http');
//This example reads from the request and pipes it to a file
http.createServer(function(request, response){
    var writeFile = fs.createWriteStream("README_copy.md");
    request.pipe(writeFile);
    request.on('end', function(){
        response.end("uploaded");
    });
}).listen(3000);