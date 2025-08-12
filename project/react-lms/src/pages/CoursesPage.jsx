import React, { useState, useEffect } from 'react';
import CourseList from '../components/CourseList';
import axios from 'axios'
// Import initial data
import { initialCourses } from '../data';

const CoursesPage = () => {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    // In a real app, this would be an API call
    async function getData(){
      let res = await axios.get('http://localhost:3000/courses')
      setCourses(res.data.courses)
    }
    getData()
    // setCourses(initialCourses);
  }, []);

  return <CourseList courses={courses} />;
};

export default CoursesPage;