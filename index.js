import express from "express";
import cors from "cors";
import { PORT } from "./config.js";
import userRoutes from "./routes/user.routes.js";
import taskRoutes from "./routes/task.routes.js";
import companyRoutes from "./routes/company.routes.js";
import eventRoutes from "./routes/event.routes.js";
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

app.use("/auth", userRoutes);
app.use("/task", taskRoutes);
app.use("/company", companyRoutes);
app.use("/event", eventRoutes);

app.listen(PORT);
console.log(`Server running on port ${PORT}`);
