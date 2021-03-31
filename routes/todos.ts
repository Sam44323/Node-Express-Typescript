import { Router } from "express";
const router = Router();

import { TodoObject } from "../models/todos";

const todos: TodoObject[] = [];

router.get("/", (req, res) => {
  res.status(200).json({ todos: todos });
});

export default router;
