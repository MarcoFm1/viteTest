import { useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';;
import viteLogo from '/vite.svg';
import './App.css';
import TaskList from './taskList'
import TaskForm from './taskForm';
import {task as data} from './task'


function App() {
  
  const [task, setTask] = useState([])

  useEffect(() => {
    setTask(data)
  }, [])
  

  function createTask(tasks){
    setTask([...task, tasks])
  }

  return (
    <>
      <TaskForm/>
      <TaskList task={task}/>
    </>
  )
}

export default App
