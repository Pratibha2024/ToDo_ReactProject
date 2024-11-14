import { useState, useEffect} from 'react';
import "./App.css";
import Header from './components/Header';
import ToDoList from './components/ToDoList';

function App() {
  
  const [todos, setTodos] = useState(() => {

  const savedTodos = localStorage.getItem('todos');
    return savedTodos ? JSON.parse(savedTodos) : [];
  });

  useEffect(() => {
    localStorage.setItem('todos', JSON.stringify(todos));
  }, [todos]);

  const addTodo = (newTodo) => {
    setTodos([...todos, { id: Date.now(), text: newTodo, completed: false }]);
  };

  const markCompleted = (id) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, completed: !todo.completed } : todo));
  };

  const deleteTodo = (id) => {
    setTodos(todos.filter(todo => todo.id !== id));
  };

  const editTodo = (id, newText) => {
    setTodos(todos.map(todo => todo.id === id ? { ...todo, text: newText } : todo));
  };


  return (
    <div className='app'>
      <div className='container'>
      <Header addTodo={addTodo} />
      <div className='todolist'>
      <ToDoList todos={todos} markCompleted={markCompleted} deleteTodo={deleteTodo} editTodo={editTodo} />
      </div>
      </div>
    </div>
  );
}

export default App;