"use client";

import { ListGroupItem, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

type Todo = {
  id: string;
  title: string;
};

export default function TodoItem({ todo }: {todo: Todo }) {
  // breaks out todo item
  //   todo: { id: string; title: string }; // todo to render
  //   deleteTodo: (id: string) => void; // event handler to remove todo
  //   setTodo: (todo: { id: string; title: string }) => void; // event handler to select todo
    const dispatch = useDispatch();
    return (
      <ListGroupItem key={todo.id}>
        <Button
          variant="danger"
          onClick={() => dispatch(deleteTodo(todo.id))} // wrap reducer functions with dispatch
          id="wd-delete-todo-click"
        >
          Delete
        </Button>
        <Button
          variant="primary"
          onClick={() => dispatch(setTodo(todo))} // wrap reducer functions with dispatch
          id="wd-set-todo-click"
        >
          Edit
        </Button>
        {todo.title}
      </ListGroupItem> // render todo's title
    );
  }
