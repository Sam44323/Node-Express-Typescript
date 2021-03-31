import { Router } from "express";

const router = Router();

interface TodoObject {
  id: number;
  name: string;
}

const todos: TodoObject[] = [];

router.get("/", (req, res) => {
  res.status(200).json({ todos: todos });
});

export default router;
