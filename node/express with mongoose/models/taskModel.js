const {Schema ,model} = require('mongoose')

const taskSchema = new Schema({
        title:String,
        description:{
            type:String,
            required:true,
        },
        date:{
            type:Date,
            default: new Date()
        }
})

module.exports = model('Task',taskSchema)



