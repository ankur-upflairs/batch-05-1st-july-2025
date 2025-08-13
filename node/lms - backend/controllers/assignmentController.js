let Assignmets = require('../models/assignmentModel')
exports.getAllassignments= async (req,res)=>{
    let assignments = await Assignmets.find({})
    res.json({success:true,assignments})
}
exports.getSingleAssignment= async (req,res)=>{
    let assignment = await Assignmets.findById(req.params.id)
    res.json({success:true,assignment})
}
exports.createAssignment= async (req,res)=>{
    let assignment = new Assignmets(req.body)
    await assignment.save()
    res.json({success:true, message:'assignment created'})
}
