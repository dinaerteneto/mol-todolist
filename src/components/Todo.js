import React from "react";
import { connect } from "react-redux";
import { doneTodo } from "../redux/actions";

const Todo = ({ todo, doneTodo }) => (
  <li className="todo-item" onClick={() => doneTodo(todo.id)}>
    {todo && todo.done ? "👌" : "👋"}{" "}
    <span> {todo.name} - {todo.done} </span>
  </li>
);

// export default Todo;
export default connect(
  null,
  { doneTodo }
)(Todo);
