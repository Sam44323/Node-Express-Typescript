"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteTodo = exports.updateTodo = exports.addTodo = exports.getTodos = void 0;
let todos = [];
const getTodos = (req, res) => {
    res.status(200).json({ todos: todos });
};
exports.getTodos = getTodos;
const addTodo = (req, res) => {
    const todo = {
        id: Math.random() * 100,
        text: req.body.name,
    };
    todos.push(todo);
    res
        .status(201)
        .json({ message: "Added a todo", todos: todos, newTodo: todo });
};
exports.addTodo = addTodo;
const updateTodo = (req, res) => {
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
exports.updateTodo = updateTodo;
const deleteTodo = (req, res) => {
    const toId = req.params.id;
    if (todos.findIndex((todo) => todo.id.toString() === toId) < 0) {
        return res.status(404).json("Can't delete the requested todo item!");
    }
    todos = todos.filter((todo) => todo.id.toString() !== toId);
    res.status(200).json({ message: "Deleted the item!" });
};
exports.deleteTodo = deleteTodo;
