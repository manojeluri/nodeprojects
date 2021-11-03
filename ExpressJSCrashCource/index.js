const express = require('express');
const members = require('./members');
const path = require('path');
const logger = require('./middleware/logger');

//init express
const app = express();


//Init middleware
//app.use(logger);
//creating a simple route(gets all members)
app.get('/api/members', (req, res)=>{
    res.json(members);
});
//Get a single member
app.get('/api/members/:id',(req,res)=>{
    const found = members.some(member => member.id === parseInt(req.params.id));
    if (found){
        res.json(members.filter(member => member.id === parseInt(req.params.id)));
    }
    else{
        res.status(400).json({msg:`No member with id of ${req.params.id}`});
    }
    
});
//set static folder
app.use(express.static(path.join(__dirname,'public')));
PORT = process.env.PORT || 5000;
//listen on a port
app.listen(PORT,() => console.log(`Server started on ${PORT}`));