import { Router } from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
} from "../controllers/task.controllers.js";

const routes = Router();

routes.get("/get", getTasks);

routes.post("/create", createTask);

routes.put("/update:id", updateTask);

routes.delete("/delete:id", deleteTask);

export default routes;
