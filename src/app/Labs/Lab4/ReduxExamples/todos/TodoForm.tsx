"use client";

import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";
import { Button, ListGroupItem, FormControl } from "react-bootstrap";

type Todo = {
  id: string;
  title: string;
};

type RootState = {
  todosReducer: {
    todo: Todo;
  };
};

export default function TodoForm() {
  const { todo } = useSelector((state: RootState) => state.todosReducer);
  const dispatch = useDispatch();
  return (
    <ListGroupItem>
      <Button 
        variant="warning"
        onClick={() => dispatch(updateTodo(todo))}
        id="wd-update-todo-click"> Update </Button>
        <Button 
        variant="btn btn-success"
        onClick={() => dispatch(addTodo(todo))}
        id="wd-add-todo-click"> Add </Button>
      <FormControl 
        value={todo.title}
        onChange={ (e) => 
        dispatch(setTodo({ ...todo, title: e.target.value })) }/>
    </ListGroupItem>
);}

