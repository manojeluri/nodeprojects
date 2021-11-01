/*
Node.js is very low-level(generally, you would need a framework to build a web app)
-Express is a web development framework for Node.js
*/
//inorder to start the web application we need to load the library
var express = require('express');
//create an instance of express
var app = express();
//Define end points in the following way
// '/' is the root route
app.get('/', function(request, response){
    //read a file from the file system and send it back to the response
    response.sendFile(__dirname+"/README.md");
});
//Receive requests at port 8080
app.listen(3000);
