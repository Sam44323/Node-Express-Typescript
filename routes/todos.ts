import { Router } from "express";
const router = Router();

import { TodoObject } from "../models/todos";

const todos: TodoObject[] = [];

router.get("/", (req, res) => {
  res.status(200).json({ todos: todos });
});

router.post("/add-todo", (req, res) => {
  const todo: TodoObject = {
    id: Math.random() * 100,
    text: req.body.name,
  };
  todos.push(todo);
  res.status(201).json({ todos: todos });
});

export default router;
