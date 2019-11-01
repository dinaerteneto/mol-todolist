import React from "react";
import { connect } from "react-redux";
// import { bindActionCreators } from "redux";
import arrayMove from "array-move";

import SortableItem from "./SortableItem";
import SortableList from "./SortableList";
import { reorderTodo } from "../redux/actions";

const TodoList = ({ todos, reorderTodo }) => {

  const handleSortEnd = ({oldIndex, newIndex}) => {
    const reorder = arrayMove(todos.todos, oldIndex, newIndex);
    const newTodos = reorder.map( (todo, index)=> ({...todo, order: index + 1}) );
    reorderTodo(newTodos);
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

/*
const mapDispatchToProps = dispatch =>
  bindActionCreators({reorderTodo}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(TodoList);
*/

export default connect(mapStateToProps, {reorderTodo} )(TodoList);