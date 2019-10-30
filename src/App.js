import React from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";

export default function App() {
  return (
    <div className="todo-app">
      <h1>Checklist de tarefas</h1>
      <TodoForm />
      <TodoList />
    </div>
  );
}
