"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const body_parser_1 = require("body-parser");
const app = express_1.default();
app.use(body_parser_1.json());
const todos_1 = __importDefault(require("./routes/todos"));
app.use(todos_1.default);
app.listen(3000, () => {
    console.log("Connected to the server!");
});
