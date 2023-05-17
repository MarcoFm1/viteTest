import React from 'react'
import { useState, useEffect } from 'react';
import {task as data} from './task'


function TaskList() {

    const [task, setTask] = useState([])

    useEffect(() => {
      setTask(data)
    }, [])
    
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