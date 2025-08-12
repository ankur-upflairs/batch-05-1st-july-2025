var express = require('express');
const { getAllCourses, createCourse } = require('../controllers/courseController');
var router = express.Router();

/* GET users listing. */
router.get('/', getAllCourses);
router.post('/',createCourse)

module.exports = router;