import { ADD_TODO, DONE_TODO } from "./actionTypes";

let nextTodoId = 0;

export const addTodo = name => {
  const nextId = ++nextTodoId;
  
  return {
    type: ADD_TODO,
    payload: {
        id: nextId,
        name,
        done: false,
        order: nextId
    }
  }
};

export const doneTodo = id => ({
  type: DONE_TODO,
  payload: { id }
});
