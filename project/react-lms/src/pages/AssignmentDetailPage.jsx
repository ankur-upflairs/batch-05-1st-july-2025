import React ,{useState,useEffect} from 'react';
import { useParams } from 'react-router-dom';
import AssignmentDetail from '../components/AssignmentDetail';
import { initialAssignments, initialCourses } from '../data';
import axios from 'axios';
const AssignmentDetailPage = () => {
  const { id } = useParams();
  const assignmentId = parseInt(id);
  const [assignment, setAssignment] = useState({});
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    
    async function getData(){
      let res = await axios.get('http://localhost:3000/courses')
      setCourses(res.data.courses)
      let resData = await axios.get('http://localhost:3000/assignments/'+id)
      setAssignment(resData.data.assignment)
    }
    getData()    
    
  }, []);
  
  
  // const assignment = initialAssignments.find(a => a.id === assignmentId);
  const course = assignment ? courses.find(c => c._id === assignment.courseId) : null;
  
  return (
    <AssignmentDetail 
      assignment={assignment} 
      course={course || {}} 
    />
  );
};

export default AssignmentDetailPage;