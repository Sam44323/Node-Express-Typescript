import express from "express";
import { json } from "body-parser";

const app = express();
app.use(json());

import todosRoutes from "./routes/todos";

app.use(todosRoutes);

app.listen(3000, () => {
  console.log("Connected to the server!");
});
