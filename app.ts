import express from "express";

const app = express();

import todosRoutes from "./routes/todos";

app.use(todosRoutes);

app.listen(3000, () => {
  console.log("Connected to the server!");
});
