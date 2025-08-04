import React, { useState, useEffect, use } from "react";
import axios from "axios";
import UpdateTask from "../pages/UpdateTask";
import { Link, Outlet, useNavigate } from "react-router";
function ViewTask() {
  const [tasks, setTasks] = useState([]);
  const [isChange, setIsChange] = useState(true);
  const [isEdit, setIsEdit] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    async function getData() {
      let res = await axios.get("http://localhost:3000/tasks");
      setTasks(res.data);
    }
    getData();
  }, [isChange]);
  async function deleteTask(id) {
    await axios.delete("http://localhost:3000/tasks/" + id);
    setIsChange(!isChange);
  }
  function handleEdit(id) {
    setIsEdit(id);
  }
  function showTask(id) {
    navigate(`/tasks/${id}`);
  }
  return (
    <>
      {isEdit ? (
        <UpdateTask
          id={isEdit}
          setIsEdit={setIsEdit}
          setIsChange={setIsChange}
        />
      ) : (
        <main>
          <Outlet /> 
          <h2>Task List</h2>
          <table>
            <thead>
              <tr>
                <th>Title</th>
                <th>Description</th>
                <th>Due</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => {
                return (
                  <tr>
                    <td
                      style={{
                        textDecoration: "underline",
                        color: "blue",
                        cursor: "pointer",
                      }}
                      onClick={() => showTask(task.id)}
                    >
                      {task.title}
                    </td>
                    {/* <td><Link to={`/tasks/${task.id}`} >{task.title}</Link></td> */}
                    <td>{task.description}</td>
                    <td>{task.date}</td>
                    <td>
                      <button onClick={() => handleEdit(task.id)}>Edit</button>{" "}
                      |{" "}
                      <button onClick={() => deleteTask(task.id)}>
                        Delete
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </main>
      )}
    </>
  );
}

export default ViewTask;
