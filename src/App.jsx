import { useState, useEffect } from 'react';
import './App.css';
import TaskList from './taskList' 
import TaskForm from './taskForm';
import {task as data} from './task'


function App() {
  
  const [task, setTask] = useState([])

  useEffect(() => {
    setTask(data)
  }, [])
  

  function createTask(tasksTitle){
    setTask([...task, {
      name: tasksTitle,
      id: task.length
    }])
  }



  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList task={task}/>
    </>
  )
}

export default App
