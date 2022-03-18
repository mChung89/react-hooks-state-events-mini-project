import React from "react";

function NewTaskForm({newTask, CATEGORIES, onTaskFormSubmit}) {
  const catOptions = CATEGORIES.filter(cat => cat !== "All").map(cat => <option key={cat}>{cat}</option>)

  function handleChange (e) {
    const name = e.target.name
    const value = e.target.value
    newData = { ...newData,
      [name]: value
    }
  }
  let newData = {}

  function handleSubmit(e) {
    e.preventDefault()
    onTaskFormSubmit(() => [...newTask, 
      newData
    ])
  }

  return (
    <form onSubmit={handleSubmit} className="new-task-form">
      <label>
        Details
        <input onChange={handleChange} type="text" name="text" />
      </label>
      <label>
        Category
        <select onChange={handleChange} name="category">
          {catOptions}
        </select>
      </label>
      <input type="submit" value="Add task" />
    </form>
  );
}

export default NewTaskForm;
