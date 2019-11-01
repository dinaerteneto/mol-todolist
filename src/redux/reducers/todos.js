import { ADD_TODO, DONE_TODO, UPDATE_TODO, DELETE_TODO, EDIT_TODO } from "../actionTypes";

const initialState = {
  todos: [
  ],
  editing: {
    isEditing: false,
    todoId: null
  }
};

export default function (state = initialState, action) {

  switch (action.type) {

    case ADD_TODO: {
      return {...state, todos:[ ...state.todos, action.payload] };
    }

    case UPDATE_TODO: {
      const { id } = action.payload;
      const todos = [...state].map(todo =>
        todo.id === id ? { ...todo } : todo
      );
      return todos;      
    }

    case DELETE_TODO: {
      const { id } = action.payload;
      const filterTodos = state.todos.filter(todo => todo.id !== id);      
      return {...state, todos: filterTodos}
    }

    case DONE_TODO: {
      const { id } = action.payload;
      const todos = [...state.todos].map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
      return {...state, todos: todos}
    }

    case EDIT_TODO: {
      const { id } = action.payload;
      console.log({...state, editing: {todoId: id, isEditing: !state.isEditing}}, 'edit todo')
      return {...state, editing: {todoId: id, isEditing: !state.isEditing}};
    }

    default:
      return state;
  }

}