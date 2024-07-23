
import React, { useState } from "react";
import './App.css';

const TodoApp = () => {
  const [todos, setTodos] = useState([
    { text: "Buy a new gaming laptop", isEditing: false },
    { text: "Complete a previous task", isEditing: false },
    { text: "Create video for YouTube", isEditing: false },
    { text: "Create a new portfolio site", isEditing: false }
  ]);
  const [newTodo, setNewTodo] = useState("");

  const handleAddTodo = () => {
    if (newTodo.trim()) {
      setTodos([...todos, { text: newTodo, isEditing: false }]);
      setNewTodo("");
    }
  };

  const handleDeleteTodo = (index) => {
    const updatedTodos = todos.filter((_, idx) => idx !== index);
    setTodos(updatedTodos);
  };

  const handleInputChange = (e) => {
    setNewTodo(e.target.value);
  };

  const handleMouseEnter = (index) => {
    const updatedTodos = todos.map((todo, idx) =>
      idx === index ? { ...todo, isEditing: true } : todo
    );
    setTodos(updatedTodos);
  };

  const handleMouseLeave = (index) => {
    const updatedTodos = todos.map((todo, idx) =>
      idx === index ? { ...todo, isEditing: false } : todo
    );
    setTodos(updatedTodos);
  };
  
  return (
    <div className="todo-app">
      <h2>Todo App</h2>
      <div className="input-container">
        <input
          type="text"
          placeholder="Add your new todo"
          value={newTodo}
          onChange={handleInputChange}
        />
        <button onClick={handleAddTodo}>+</button>
      </div>
      <ul className="todo-list">
        {todos.map((todo, index) => (
          <li
            key={index}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={() => handleMouseLeave(index)}
          >
            {todo.text}
            {todo.isEditing && (
              <button
                className="delete-button"
                onClick={() => handleDeleteTodo(index)}
              >
                               <i className="fas fa-trash-alt"></i>
                               
              </button>
            )}
          </li>
        ))}
      </ul>
      <div className="footer">
        You have {todos.length} pending tasks
        <button onClick={() => setTodos([])}>Clear All</button>
      </div>
    </div>
  );
};

export default TodoApp;
