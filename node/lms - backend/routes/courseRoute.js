var express = require('express');
const { getAllCourses, createCourse, getSingleCourse } = require('../controllers/courseController');
var router = express.Router();

/* GET users listing. */
router.get('/', getAllCourses);
router.get('/:id', getSingleCourse);

router.post('/',createCourse)

module.exports = router;
