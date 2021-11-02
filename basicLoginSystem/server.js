const express = require('express');
const path = require('path');
const bodyparser = require("body-parser");
const session = require('express-session');
const { v4: uuidv4 } = require("uuid");

//imports the router module from local library
const router = require('./router');
//creating express application
const app = express();
//if there is a host in process.env.port then it will run there or other wise on localhost:3000
const port = process.env.port || 3000;
/*
The app.use() function is used to mount the specified middleware functions
at the path which is being specified.
It is mostly used to setup middleware for your applicaiton
bodyparser.json() - returns middleware that only parses json()
bodyparser.urlencoded() - returns middleware that only parses urlencoded bodies
*/
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:true}))
//
app.set('view engine', 'ejs');
//load static assets

app.use('/static',express.static(path.join(__dirname,'public')))
app.use('/assets',express.static(path.join(__dirname,'public/assets')))
/*
uuid - Universally unique identifier 
*/
app.use(session({
    secret: uuidv4(), //  '1b9d6bcd-bbfd-4b2d-9b5d-ab8dfbbd4bed'
    resave: false,
    saveUninitialized: true
}));

app.use('/route', router);
// home route
//this renders base.ejs
app.get('/', (req, res) =>{
    res.render('base', { title : "Login System"});
})
app.listen(port, ()=>{ console.log("Listening to the server on http://localhost:3000")});