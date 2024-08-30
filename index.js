import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import { routes } from "./routes/user.routes.js";
import { connectDB } from "./db.js";
import cookieParser from "cookie-parser";

connectDB();

const app = express();
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
    credentials: true,
  })
);
app.use(cookieParser());

app.use("/auth", routes);

app.listen(PORT);
console.log(`Server running on port ${PORT}`);
