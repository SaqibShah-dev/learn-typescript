import express from "express";
import router from "./routes/todoRoutes";
import errorHandler from "./middleware/errorHandler";
import "dotenv/config";
import { PORT } from "./config/env";

const app = express();

app.use(express.json());
app.use("/todos", router);
app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});