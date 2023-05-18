import React from 'react'


function TaskList({task}) {
    
    if(task.length === 0) {
        return <h1>SALO SE LA RE COME POR TONTO </h1>
    } 

    return (
        <div>
            {task.map(task => (
                <div key={task.id}>
                    <h1>{task.name}</h1>
                    <p>Su precio es: {task.price}</p>
                </div>
            ))}
        </div>
  )
}

export default TaskList