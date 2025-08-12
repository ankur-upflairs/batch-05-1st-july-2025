import React, { useState, useEffect } from 'react';
import StudentList from '../components/StudentList';

// Import initial data
import { initialStudents } from '../data';

const StudentsPage = () => {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    // In a real app, this would be an API call
    setStudents(initialStudents);
  }, []);

  const handleDeleteStudent = (id) => {
    setStudents(students.filter(student => student.id !== id));
    // In a real app, this would be an API call to delete the student
  };

  return <StudentList students={students} onDeleteStudent={handleDeleteStudent} />;
};

export default StudentsPage;