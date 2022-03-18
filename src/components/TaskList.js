import React, { useState } from "react";
import Task from "./Task"

function TaskList({ filtered, setTask, newTask}) {

  function handleDelete (name) {
    const newState = newTask.filter(task => task.text !== name)
    setTask(newState)
  }

  
  const filteredTaskList = newTask.filter(task => 
    filtered === "All" ? true : task.category === filtered)
    
    const taskListDisplay = filteredTaskList.map((task,index) => {
      return <Task onDeleteTask={handleDelete} category={task.category} text={task.text} key={index}/>
    })

  return (
    <div className="tasks">
      {taskListDisplay} 
    </div>
  );
}

export default TaskList;
