var fs = require('fs')
//create a readstream from the original file
var readFile = fs.createReadStream("README.md");
//create a writeStream to the destined file
var writeFile = fs.createWriteStream("README_copy.md");
//streaming is simple with the pipe function
readFile.pipe(writeFile);