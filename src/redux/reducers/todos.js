import { 
  ADD_TODO, 
  DONE_TODO, 
  UPDATE_TODO, 
  DELETE_TODO, 
  EDIT_TODO, 
  REORDER_TODO 
} from "../actionTypes";

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
      break;

    case UPDATE_TODO: {
      const { id } = action.payload;
      const payload = action.payload;
      const todos = [...state.todos].map(todo =>
        todo.id === id ? { ...todo, ...payload } : todo
      );
      return {...state, todos: todos};
    }
    break;

    case DELETE_TODO: {
      const { id } = action.payload;
      const filterTodos = state.todos.filter(todo => todo.id !== id);      
      return {...state, todos: filterTodos}
    }
    break;

    case DONE_TODO: {
      const { id } = action.payload;
      const todos = [...state.todos].map(todo =>
        todo.id === id ? { ...todo, done: !todo.done } : todo
      );
      return {...state, todos: todos}
    }
    break;

    case EDIT_TODO: {
      const { id } = action.payload;
      return {...state, editing: {todoId: id, isEditing: !state.editing.isEditing}};
    }
    break;

    case REORDER_TODO: {
      console.log('reducers - REORDER_TODO')
      console.log(action.payload)
      // console.log({...state, todos: arrayMove(state.todos, oldIndex, newIndex)});
      // return {...state, todos: arrayMove(todos, oldIndex, newIndex)}
    }
    break;

    default:
      return state;
      break;
  }

}