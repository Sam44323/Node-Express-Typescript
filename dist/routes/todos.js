"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const router = express_1.Router();
const todos = [];
router.get("/", (req, res) => {
    res.status(200).json({ todos: todos });
});
router.post("/add-todo", (req, res) => {
    const todo = {
        id: Math.random() * 100,
        text: req.body.name,
    };
    todos.push(todo);
    res.status(201).json({ todos: todos });
});
exports.default = router;
