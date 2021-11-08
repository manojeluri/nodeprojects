//importing the dependencies
const bodyParser = require('body-parser');
const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const morgan = require('morgan');

//defining the express app
const app = express();

//defining an array to work as a database (temporary solution)
const ads = [
    {title: "Hello World Again!"}
];

//adding helmet to enhance the api security
app.use(helmet());

//adding bodyParser to parse JSON bodies into JS objects
app.use(bodyParser.json());

//enabling cors for all requests
app.use(cors());

//adding morgan to log HTTP requests
app.use(morgan('combined'));

//defining an endpoint to return all ads
app.get('/',(req,res)=>{
    res.send(ads);
});

//starting the server
app.listen(3001, ()=>{
    console.log("Listening on port 3001");
});

