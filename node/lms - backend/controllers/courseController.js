const Courses =  require('../models/courseModel')


exports.getAllCourses =async  (req,res) =>{
    let courses = await Courses.find({})
    res.json({success:true, courses})
}

exports.createCourse = async (req,res) =>{
    let course = new Courses(req.body)
    await course.save()
    res.json({success:true, message:'new course created'})
}



