import React from "react";

function Task({ text, category, onDeleteTask }) {

  function handleClick(e) {
    onDeleteTask(e)
  }

  return (
    <div className="task">
      <div className="label">{category}</div>
      <div className="text">{text}</div>
      <button onClick={() => handleClick(text)} className="delete">X</button>
    </div>
  );
}

export default Task;