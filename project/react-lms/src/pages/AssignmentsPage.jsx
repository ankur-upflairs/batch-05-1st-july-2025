import React, { useEffect, useState } from 'react';
import AssignmentList from '../components/AssignmentList';
import { initialAssignments, initialCourses } from '../data';
import axios from 'axios';

const AssignmentsPage = () => {
  const [assignments, setAssignments] = useState(initialAssignments);
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    
    async function getData(){
      let res = await axios.get('http://localhost:3000/courses')
      setCourses(res.data.courses)
    }
    getData()    
  }, []);
  useEffect(() => {
    axios.get('http://localhost:3000/assignments')
    .then(res=>setAssignments(res.data.assignments))
  }, [])
  
  const handleDeleteAssignment = (id) => {
    setAssignments(assignments.filter(assignment => assignment.id !== id));
  };

  return (
    <AssignmentList 
      assignments={assignments} 
      courses={courses}
      onDeleteAssignment={handleDeleteAssignment}
    />
  );
};

export default AssignmentsPage;