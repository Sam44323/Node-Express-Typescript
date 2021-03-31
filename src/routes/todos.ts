import { Router } from "express";
const router = Router();

import * as TodoControllers from "../controllers/todos";

router.get("/", TodoControllers.getTodos);

router.post("/todo", TodoControllers.addTodo);

router.put("/todo/:id", TodoControllers.updateTodo);

router.delete("/todo/:id", TodoControllers.deleteTodo);

export default router;
