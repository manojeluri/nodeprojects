//setting up basic express server
const express = require('express');
const app = express();
app.get('/', (req,res)=>{
    res.send("Hello task manager");
}).listen(5000);