//setting up basic express server
const express = require('express');
const app = express();
const port = 5000;
const tasks = require('./routes/tasks');
const connectDB = require('./db/connect');
require('dotenv').config()
//json middleware
app.use(express.json());
//routes
app.get('/', (req,res)=>{
    res.send("Hello task manager");
});

//all the routes
// app.get('/api/v1/tasks') - get all the tasks
app.use('/api/v1/tasks', tasks);
// app.post('api/v1/tasks') - get a new task
// app.get('/api/v1/tasks/:id') - get single task
// app.patch('/api/v1/tasks/:id') - update tasks
// app.delete('/api/v1/tasks/:id') - delete task
const start = async () =>{
    try{
        await connectDB(process.env.MONGO_URI)
        app.listen(port, console.log(`Listening on port ${port}`))
    }
    catch (error){
        console.log(error)
    }
}
start()
