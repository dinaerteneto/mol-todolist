import React from 'react';
import { SortableElement } from 'react-sortable-hoc';
import Todo from './Todo'

const SortableItem = SortableElement((value) => {
    const {todo, editing} = value;
    return (
        <Todo
            index={`index-${todo.id}`}   
            key={`todo-${todo.id}`} 
            todo={todo} 
            editing={editing} 
        />
    )
});

export default SortableItem;