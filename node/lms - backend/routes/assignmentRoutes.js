var express = require('express');
const { getAllassignments, createAssignment, getSingleAssignment } = require('../controllers/assignmentController');
var router = express.Router();

/* GET users listing. */
router.get('/', getAllassignments);
router.get('/:id', getSingleAssignment);

router.post('/',createAssignment)

module.exports = router;
