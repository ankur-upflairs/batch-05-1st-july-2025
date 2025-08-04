import React,{useState,useEffect} from "react";
import { useParams } from "react-router";
import axios from "axios";

const TaskCard = () => {
  // let params = useParams()
  let { id } = useParams();
  const [task, setTask] = useState({
    title: "",
    description: "",
    date: "",
  });
  useEffect(() => {
    async function getData() {
      let res = await axios.get("http://localhost:3000/tasks/" + id);
      setTask(res.data);
    }
    getData();
  }, []);

  return (
    <div className="card  mb-3 shadow-sm">
      <div className="card-body">
        <h5 className="card-title">{task.title}</h5>
        <h6 className="card-subtitle mb-2 text-muted">{task.date}</h6>
        <p className="card-text">{task.description}</p>
      </div>
    </div>
  );
};

export default TaskCard;
