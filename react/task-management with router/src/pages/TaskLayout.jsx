import React from 'react'
import { Outlet } from 'react-router'

function TaskLayout() {
  return (
    <div>
        <Outlet />
    </div>
  )
}

export default TaskLayout