// src/ToDoList.js
import React, { useState } from 'react';

function ToDoList() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const submitHandler= (index) => {
    setTasks([...tasks, { text: taskInput, completed: false }] )
    setTaskInput('');
  };

  const removeHandler = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  return (
    <div className="container">
      <h1>To-Do List</h1>
      <div className="input-container">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add a new task"
        />
        <button onClick={submitHandler}>Add</button>
      </div>
      <ul>
        {tasks.map((task, index) => (
          <li key={index} className="complete">
            {task.text}
            <button className="remove" onClick={() => removeHandler(index)}>
              Remove
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;
