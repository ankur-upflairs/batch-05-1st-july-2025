const { Schema, model, default: mongoose } = require("mongoose");

const assignmentSchema = new Schema({
  
    title: {type:String,required:true},
    description: {type:String,required:true},
    courseId: {
        type:mongoose.Types.ObjectId ,
        Ref:'Course'
    },
    dueDate: {type:Date,required:true},
    points: {type:Number,required:true,default:100},
    status: {type:String,required:true,enum:['Active','Inactive']},
    submissionType: {type:String,required:true },
    
  
},{timestamps:true});

module.exports = model('Assignment',assignmentSchema)
// id: 1,
//     title: 'Calculus Problem Set 1',
//     description: 'Complete problems 1-10 from Chapter 3',
//     courseId: 1,
//     dueDate: '2024-02-15',
//     points: 100,
//     status: 'Active',
//     submissionType: 'File Upload',
//     createdAt: '2024-01-20'
//   },