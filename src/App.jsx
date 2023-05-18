import { useState, useEffect } from 'react';
import './App.css';
import TaskList from './components/taskList' 
import TaskForm from './components/taskForm';
import {task as data} from './task'


function App() {
  
  const [task, setTask] = useState([])

  useEffect(() => {
    setTask(data)
  }, [])
  

  function createTask(tasks){
    setTask([...task, {
      name: tasks.name,
      id: task.length,
      price: task.price
    }])
  }

  function deleteTask(taskId){

  }



  return (
    <>
      <TaskForm createTask={createTask}/>
      <TaskList task={task} deleteTask = {deleteTask}/>
    </>
  )
}

export default App
