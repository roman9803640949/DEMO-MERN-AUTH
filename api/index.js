import express from "express";
import dotenv from "dotenv";
import { userRoutes } from "./routes/index.js";
import { notFound, errorHandler } from "./middleware/index.js";
import { connectDB } from "./config/db.js";
dotenv.config();

const port = process.env.PORT || 5000;

connectDB();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/users", userRoutes);
app.get("/", (req, res) => res.send("server is ready"));

app.use(notFound);
app.use(errorHandler);

app.listen(port, () =>
  console.log(`Server started http://localhost:${port}:/`)
);
