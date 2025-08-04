import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Home from "./components/Home";
import TaskContext from "./components/TaskContext";
import { BrowserRouter, Link, Route, Routes } from "react-router";
import AddTask from "./pages/AddTask";
import ViewTask from "./pages/ViewTask";
import Tasks from "./pages/Tasks";
import UpdateTask from "./pages/UpdateTask";
import Navbar from "./components/Navbar";
import TaskCard from "./pages/TaskComp";
import TaskLayout from "./pages/TaskLayout";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <BrowserRouter>
        <Navbar />
        {/* <p><Link to={'/add-task'}>add task</Link></p> */}
        <Routes>
          <Route path="" element={<Tasks />} />
          <Route path="add-task" element={<AddTask />} />
          <Route path="update-task" element={<UpdateTask />} />
          <Route path="tasks" element={<TaskLayout />}>
            <Route index element={<ViewTask />} />
            <Route path=":id" element={<TaskCard />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
