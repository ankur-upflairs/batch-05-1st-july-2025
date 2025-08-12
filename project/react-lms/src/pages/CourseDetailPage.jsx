import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CourseDetail from '../components/CourseDetail';
import axios from 'axios';
// Import initial data
import { initialCourses, initialStudents } from '../data';

const CourseDetailPage = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [students, setStudents] = useState([]);

    useEffect(() => {
    // In a real app, these would be API calls
   async function getData() {
    let res = await axios.get('http://localhost:3000/courses/'+id)
    setCourse(res.data.course)
   }
   getData()
    // setCourse(foundCourse);
    setStudents(initialStudents);
  }, [id]);
  // useEffect(() => {
  //   // In a real app, these would be API calls
  //   const foundCourse = initialCourses.find(c => c.id === parseInt(id));
  //   setCourse(foundCourse);
  //   setStudents(initialStudents);
  // }, [id]);

  return <CourseDetail course={course} students={students} />;
};

export default CourseDetailPage;