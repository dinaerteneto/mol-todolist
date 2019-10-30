import React from "react";
import { connect } from "react-redux";
import { getTodos } from "../redux/selectors";
import Todo from "./Todo";


const TodoList = ( {todos} ) => (
    <ul className="todo-list">
    {todos && todos.length
      ? todos.map((todo, index) => {
          return <Todo key={`todo-${todo.id}`} todo={todo} />;
        })
      : "No todos, yay!"}
  </ul>
  );



  const mapStateToProps = state => {
      const { todos } = state;
 

      // const todos = getTodos(state);
      //console.log({todos})
      console.log('mapStateToProps', state);
      return state;
    /*  
    const { visibilityFilter } = state;
    const todos = getTodosByVisibilityFilter(state, visibilityFilter);
    */
    //return { todos };
  };
  // export default TodoList;
  export default connect(mapStateToProps)(TodoList);