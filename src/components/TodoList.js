import React from "react";
import { connect } from "react-redux";
import { List } from 'semantic-ui-react'

import Todo from "./Todo";

const TodoList = ({ todos }) => (
  
  <List celled>
    {todos.todos && todos.todos.length
      ? todos.todos.map((todo, index) => {
        return <Todo key={`todo-${todo.id}`} todo={todo} editing={todos.editing} />;
      })
      : "No todos, yay!"}
  </List>
);

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps)(TodoList);