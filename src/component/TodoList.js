import React, { useState } from 'react';

const TodoList = () => {
  const [todos, setTodos] = useState([]);  // List of tasks
  const [inputValue, setInputValue] = useState(''); // Value of input field
  const [editIndex, setEditIndex] = useState(-1); // Index of the task being edited

  // Function to add or update a task
  const handleInputChange = (e) => {
    setInputValue(e.target.value); // Update input value
  };

  const addOrUpdateTodo = (e) => {
    e.preventDefault();
    if (inputValue.trim()) {
      if (editIndex >= 0) {
        // Update existing task
        const updatedTodos = todos.map((todo, index) =>
          index === editIndex ? inputValue : todo
        );
        setTodos(updatedTodos);
        setEditIndex(-1); // Reset edit index
      } else {
        // Add new task
        setTodos([...todos, inputValue]);
      }
      setInputValue(''); // Clear input field
    }
  };

  // Function to delete a task
  const deleteTodo = (index) => {
    const newTodos = todos.filter((_, i) => i !== index);
    setTodos(newTodos);
  };

  // Function to start editing a task
  const startEditing = (index) => {
    setEditIndex(index);
    setInputValue(todos[index]); // Set input to the task being edited
  };

  return (
    <div>
      <h1>To-Do List</h1>
      <form onSubmit={addOrUpdateTodo}>
        <input
          type="text"
          value={inputValue}
          onChange={handleInputChange}
          placeholder="Add or edit a task"
        />
        <button type="submit">{editIndex >= 0 ? 'Update' : 'Add'}</button>
      </form>
      <ul>
        {todos.map((todo, index) => (
          <li key={index}>
            {todo}
            <button onClick={() => startEditing(index)}>Edit</button>
            <button onClick={() => deleteTodo(index)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
