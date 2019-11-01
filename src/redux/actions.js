import { 
  ADD_TODO, 
  DONE_TODO, 
  UPDATE_TODO, 
  DELETE_TODO, 
  EDIT_TODO, 
  REORDER_TODO 
} from "./actionTypes";

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

export const updTodo = (id, name) => ({
  type: UPDATE_TODO,
  payload: { id, name }
})

export const delTodo = id => ({
  type: DELETE_TODO,
  payload: { id }
});

export const editTodo = id => ({
  type: EDIT_TODO,
  payload: { id }
});

export const reorderTodo = todos => ({
  type: REORDER_TODO,
  payload: { todos }
});