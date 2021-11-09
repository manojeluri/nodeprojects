var http = require('http');
var fs = require('fs');
var url = "http://api.openweathermap.org/data/2.5/weather?q=New+York,US&appid=d023af95a70b814ef43150e52112910a&units=metric"
var server = http.createServer(function(request, response){
//All logic goes here
    var request = require('request');
    request(url,(err, res, body)=>{
        var data = JSON.parse(body);
        response.write("<html><body><div id = 'container'>");
        response.write("<p>Enter city: "+"<input type = 'text' name='city'>"+"</p>");
        response.write("<input type = 'submit'>");
        response.write("<h1>"+'City Name - :'+data['name']+"<br>"+"</h1>")
        response.write("<h2>"+"Temperature - :"+data.main['temp']+"<br>"+"</h2>");
        response.write("<h2>"+"Sunset time - "+new Date(data.sys['sunset']*1000)+"</h2>");
        response.write("</div></body></html>");
        response.end();   
    });    
}).listen(3000);
