const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');

//init express
const app = express();
//app.use(logger);

//bodyparser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));
//set static folder
app.use(express.static(path.join(__dirname,'public')));

app.use('/api/members',require('./routes/api/members'))
PORT = process.env.PORT || 5000;
//listen on a port
app.listen(PORT,() => console.log(`Server started on ${PORT}`));