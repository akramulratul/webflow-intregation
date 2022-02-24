import React from "react";
// import complete from "../image/done.svg";
const TodosList = ({ todos, setTodos, setEditTodo }) => {
  //   const style = {
  //     height: "40px",
  //     width: "50px",
  //   };
  const handleDelete = ({ id }) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  const handleComplete = (todo) => {
    setTodos(
      todos.map((item) => {
        if (item.id === todo.id) {
          return { ...item, completed: !item.completed };
        }
        return item;
      })
    );
  };
  const handleEdit = (id) => {
    const findTodo = todos.find((todo) => todo.id !== id);
    setEditTodo(findTodo);
  };
  return (
    <div>
      {todos.map((todo) => (
        <li className="list-item" key={todo.id}>
          <input
            type="text"
            className={`list ${todo.completed ? "complete" : ""}`}
            value={todo.title}
            onChange={(event) => event.preventDefault()}
          />
          <div>
            <button
              className="button-complete task-button"
              onClick={() => handleComplete(todo)}
            >
              <i className="fa fa-edit">c</i>
            </button>
            <button
              className="button-edit task-button"
              onClick={() => handleEdit(todo)}
            >
              <i className="fa fa-edit">e</i>
            </button>
            <button
              className="button-delete task-button"
              onClick={() => handleDelete(todo)}
            >
              <i className="fa fa-trash">t</i>
            </button>
          </div>
        </li>
      ))}
    </div>
  );
};

export default TodosList;
