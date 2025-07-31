import React, { useState } from 'react'

function AddTask() {
    const [task,setTask] = useState({
        title:'',
        description: '',
        date:''
    })
    function handleChange(e) {
        setTask({...task,[e.target.name]:e.target.value})
    }
    function handleSubmit(e) {
       e.preventDefault()
       console.log(task)
    }
  return (
    <main>
    <h2>Add New Task</h2>
    <form onSubmit={handleSubmit}  >
      <label>Title</label>
      <input onChange={handleChange} type="text" name="title" placeholder="Enter task title" required />
      <label>Description</label>
      <textarea onChange={handleChange} name="description" placeholder="Task description"></textarea>
      <label>Due Date</label>
      <input onChange={handleChange} name="date" type="date" />
      <button type="submit">Add Task</button>
    </form>
  </main>
  )
}

export default AddTask