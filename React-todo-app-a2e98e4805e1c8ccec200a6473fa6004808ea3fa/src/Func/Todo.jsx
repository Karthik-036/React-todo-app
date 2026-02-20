
import React from "react";
import { useState } from "react";
import "./Todo.css";  

function Todo() {

  const [task, setTask] = useState("");
  const [todos, setTodos] = useState([]);

  function addTodo() {
    if (task.trim() === "") return;

    const newTodo = {
      id: Date.now(),
      text: task,
      completed: false
    };

    setTodos([...todos, newTodo]);
    setTask("");
  }

  function deleteTodo(id) {
    const updated = todos.filter((todo) => todo.id !== id);
    setTodos(updated);
  }

  function toggleComplete(id) {
    const updated = todos.map(todo =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(updated);
  }

  return (
    <div className="todo-container">

      <h1 className="title">🌟 Premium Todo App</h1>

      <div className="input-section">
        <input
          type="text"
          value={task}
          onChange={(e) => setTask(e.target.value)}
          placeholder="Enter your task..."
        />
        <button className="add-btn" onClick={addTodo}>Add</button>
      </div>

      <ul className="todo-list">
        {todos.map((todo) => (
          <li key={todo.id} className="todo-item">

            <span
              onClick={() => toggleComplete(todo.id)}
              className={todo.completed ? "completed" : ""}
            >
              {todo.text}
            </span>

            <button 
              className="delete-btn" 
              onClick={() => deleteTodo(todo.id)}
            >
              Delete
            </button>

          </li>
        ))}
      </ul>
    </div>
  );
}

export default Todo;
