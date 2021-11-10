const getAllTasks = (req, res) =>{
    res.send("All items from the file");
}

const createTask = (req, res) =>{
    res.send("create task");
}
const getTask = (req, res) =>{
    res.send("get single task");
}
const updateTask = (req, res) =>{
    res.send("update task");
}
const deleteTask = (req, res) =>{
    res.send("delete a task");
}

module.exports = {
    getAllTasks, createTask, getTask, updateTask, deleteTask,
}