import React, { useState } from "react";
import CategoryFilter from "./CategoryFilter";
import NewTaskForm from "./NewTaskForm";
import TaskList from "./TaskList";

import { CATEGORIES, TASKS } from "../data";

function App() {
  const [filtered, setFiltered] = useState("All");
  const [newTask, setTask] = useState(TASKS);
  
  const tasksToDisplay = newTask
 
  return (
    <div className="App">
      <h2>My tasks</h2>
      <CategoryFilter setFiltered={setFiltered} CATEGORIES={CATEGORIES} filtered={filtered} />
      <NewTaskForm onTaskFormSubmit={setTask} newTask={newTask} CATEGORIES={CATEGORIES}/>
      <TaskList newTask={newTask} setTask={setTask} filtered={filtered} TASKS={tasksToDisplay} />
    </div>
  );
}

export default App;
