import { ADD_TODO, DONE_TODO } from "../actionTypes";

export default function(state = [], action) {

  switch (action.type) {

    case ADD_TODO: {
      return [...state, { ...action.payload}];
    }
    
    case DONE_TODO: {
      const { id } = action.payload;
      const newTodos = [...state];
      const index = state.findIndex(todo => todo.id === id);
      newTodos[index].done = !newTodos[index].done;
      return newTodos;
    } 

    default:
      return state;
  }
    
}