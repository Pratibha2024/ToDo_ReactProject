import { useState } from 'react';
import "../App.css";

function Header({ addTodo }) {
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim() !== '') {
      addTodo(newTodo);
      setNewTodo('');
    }
  };

  return (
    <div className='header'>
      <h1>TO DO LIST</h1>
      <input type="text" placeholder='Enter your task' value={newTodo} 
            onChange={(e) => setNewTodo(e.target.value)} className='task-input' required />
      <button className='button-add' onClick={handleAddTodo}>Add</button>
    </div>
  );
}

export default Header;