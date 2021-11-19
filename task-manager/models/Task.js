const mongoose = require("mongoose");
const TaskSchema = mongoose.Schema({
    name: {
        type: String,
        required:[true, "Must provide a name"],
        trim: true,
        maxlength:[20, "cannot be more than 20 characters"]
    },completed: {
        type: Boolean,
        default:false
    }
})
module.exports = mongoose.model('Task', TaskSchema)