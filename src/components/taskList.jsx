import React from 'react'
import TaskCard from './TaskCard'

function TaskList({task, deleteTask}) {
    
    if(task.length === 0) {
        return <h1>SALO SE LA RE COME POR TONTO </h1>
    } 

    return (
        <div>
            {task.map(task => (
                <TaskCard key={task.id} task={task} deleteTask = {deleteTask}/>
            ))}
        </div>
  )
}

export default TaskList