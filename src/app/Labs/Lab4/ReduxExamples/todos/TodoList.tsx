"use client";

import { ListGroup } from "react-bootstrap";
import TodoForm from "./TodoForm"; // Added for refactoring Todo list 
import TodoItem from "./TodoItem"; // Added for refactoring Todo list 
import { useSelector } from "react-redux";

type Todo = {
  id: string;
  title: string;
};

type RootState = {
  todosReducer: {
    todos: Todo[];
  };
};


export default function TodoList() {
  const { todos } = useSelector((state: RootState) => state.todosReducer);
  return (
    <div id="wd-todo-list-redux">
      <h2>Todo List</h2>
      <ListGroup>
        <TodoForm />
        {todos.map((todo: Todo) => (
            <TodoItem key ={todo.id} todo={todo} />
        ))}
        </ListGroup>
        <hr/>
        </div>);}