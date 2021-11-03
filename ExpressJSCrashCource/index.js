const express = require('express');
const path = require('path');
const logger = require('./middleware/logger');
const exphbs = require('express-handlebars');
const members = require('./Members');

//init express
const app = express();

//app.use(logger);

//Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout:'main'}));
app.set('view engine', 'handlebars')

//bodyparser middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

//Homepage route
app.get('/',(req, res) => res.render('index',{title:'Member App',  members}));

//set static folder
app.use(express.static(path.join(__dirname,'public')));

app.use('/api/members',require('./routes/api/members'))
PORT = process.env.PORT || 5000;
//listen on a port
app.listen(PORT,() => console.log(`Server started on ${PORT}`));