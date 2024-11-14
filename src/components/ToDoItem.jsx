import { useState } from "react";
import { FaCheck, FaEdit, FaTrashAlt } from 'react-icons/fa';
import "../App.css";

function ToDoItem({ todo, markCompleted, deleteTodo, editTodo }) {

  const [isEditing, setIsEditing] = useState(false);
  const [editedText, setEditedText] = useState(todo.text);

  const handleEdit = () => {
    if (editedText.trim() !== "" && editedText !== todo.text) {
      editTodo(todo.id, editedText); 
      setIsEditing(false);            
    } else {
      setIsEditing(false);    
    }
  };

  return (
    <li className="list-item">
       {isEditing ? (
        <>
          <input className="list" type="text" value={editedText} onChange={(e) => setEditedText(e.target.value)} />
          <button className="button-save" onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
      <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}> {todo.text} </span>
      <div className="buttons">
          <FaCheck
              className="button-complete"
              onClick={() => markCompleted(todo.id)}
              style={{ cursor: 'pointer' }} />
          <FaEdit
              className="button-edit"
              onClick={() => setIsEditing(true)}
              style={{ cursor: 'pointer' }} />
          <FaTrashAlt
              className="button-delete"
              onClick={() => deleteTodo(todo.id)}
              style={{ cursor: 'pointer' }}/>
      </div>
    </>
      )}
      </li>
  );
}

export default ToDoItem;