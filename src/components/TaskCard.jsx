import React from 'react'

function TaskCard({task, deleteTask}) {
  return (
    <div>
        <h1>{task.name}</h1>
        <p>Su precio es: {task.price}</p>
        <button onClick={deleteTask}>Delete</button>
    </div>
  )
}

export default TaskCard