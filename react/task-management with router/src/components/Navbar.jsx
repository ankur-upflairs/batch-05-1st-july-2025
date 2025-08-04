import React from "react";
import { Link, NavLink } from "react-router";
let navOptions = ["Home", "Add Task", "View Tasks"];

function Navbar() {
  return (
    <div>
      <>
        <nav>
          <h1>Task Manager</h1>
          <ul>
            <NavLink to={'/'}>Home</NavLink>
            <NavLink to={'/add-task'}>Add Task</NavLink>           
            <NavLink to={'/tasks'}>View Tasks</NavLink>
          </ul>
          {/* <ul>
            <Link to={'/'}>Home</Link>
            <Link to={'/add-task'}>Add Task</Link>           
            <Link to={'/tasks'}>View Tasks</Link>  

          </ul> */}
        </nav>
        
      </>
    </div>
  );
}

export default Navbar;
