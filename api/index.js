import express from "express";
import dotenv from "dotenv";
import { userRoutes } from "./routes/index.js";
import { notFound, errorHandler } from "./middleware/index.js";
dotenv.config();

const port = process.env.PORT || 5000;

const app = express();

app.use("/api/users", userRoutes);
app.get("/", (req, res) => res.send("server is ready"));

app.use(notFound).use(errorHandler);

app.listen(port, () =>
  console.log(`Server started http://localhost:${port}:/`)
);
