import React from "react";
import { connect } from "react-redux";
import arrayMove from "array-move";

import SortableItem from "./SortableItem";
import SortableList from "./SortableList";
import { reorderTodo } from "../redux/actions";

const TodoList = ({ todos }) => {

  const handleSortEnd = ({oldIndex, newIndex}) => {
    const reorder = arrayMove(todos.todos, oldIndex, newIndex);
    const x = {todos: reorder};
    console.log(x);
    reorderTodo(x);
  };

  return (
    <SortableList onSortEnd={handleSortEnd} pressDelay={100}>
      {todos.todos && todos.todos.length
        ? todos.todos.map((todo, index) => {
          return <SortableItem 
            index={index} 
            key={`todo-${todo.id}`} 
            todo={todo} 
            editing={todos.editing} />;
        })
        : "No todos, yay!"}
    </SortableList>
  )
};

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, {reorderTodo} )(TodoList);