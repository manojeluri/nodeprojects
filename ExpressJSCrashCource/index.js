const express = require('express');
const path = require('path');
//init express
const app = express();

//create your endpoints/route handlers
app.get('/', (req,res) =>{
    res.sendFile(path.join(__dirname,'public','index.html'));
});
PORT = process.env.PORT || 5000;
//listen on a port
app.listen(PORT,() => console.log(`Server started on ${PORT}`));