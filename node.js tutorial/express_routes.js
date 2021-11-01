var express = require('express');
var request = require("request");
var url = require("url");
var crypto = require("crypto");
var app = express()

//create an endpoint with the following syntax
//By using ':', we specify that we will use a dynamic parameter
app.get('/images/:email', function(req, response){
    //Use the information from the request parameters
    var email = req.params.email;
    //The gravatar API requires a hash of the email parameter.
    var hash = crypto.createHash('md5').update('email').digest('hex');
    //Asusual it is possible to specify the set of options in an object
    var options = {
        protocol:"http",
        host:'gravatar.com',
        pathname:'/avatar/'+hash,
        query:{size:80}
    }
    //Make a request with the url
    var gravatarUrl = url.format(options);
    //Pipe the request to the response
    request(gravatarUrl).pipe(response);
});
app.listen(3000);