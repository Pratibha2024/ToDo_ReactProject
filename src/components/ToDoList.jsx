import ToDoItem from './ToDoItem';
import "../App.css";

function ToDoList({ todos, markCompleted, deleteTodo, editTodo }) {
  return (
    <div className="todo-list-container">
      <ul>
        {todos.map(todo => (
          <ToDoItem key={todo.id} todo={todo} markCompleted={markCompleted} deleteTodo={deleteTodo} editTodo={editTodo} />
        ))}
      </ul>
    </div>
  );
}

export default ToDoList;