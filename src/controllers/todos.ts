import { Request, Response } from "express";
import { TodoObject } from "../models/todos";

let todos: TodoObject[] = [];

export const getTodos = (req: Request, res: Response) => {
  res.status(200).json({ todos: todos });
};

export const addTodo = (req: Request, res: Response) => {
  const todo: TodoObject = {
    id: Math.random() * 100,
    text: req.body.name,
  };
  todos.push(todo);
  res
    .status(201)
    .json({ message: "Added a todo", todos: todos, newTodo: todo });
};

export const updateTodo = (req: Request, res: Response) => {
  if (todos.findIndex((todo) => todo.id.toString() === req.params.id) < 0) {
    return res.status(404).json({ message: "Could not find the todo item!" });
  }
  todos = todos.map((todo) => {
    if (todo.id.toString() === req.params.id) {
      todo.text = req.body.name;
    }
    return todo;
  });
  res.status(200).json({ message: "Updated the todo item! " });
};

export const deleteTodo = (req: Request, res: Response) => {
  const toId = req.params.id;
  if (todos.findIndex((todo) => todo.id.toString() === toId) < 0) {
    return res.status(404).json("Can't delete the requested todo item!");
  }
  todos = todos.filter((todo) => todo.id.toString() !== toId);
  res.status(200).json({ message: "Deleted the item!" });
};
