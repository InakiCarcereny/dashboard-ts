import { Router } from "express";
import {
  getTasks,
  createTask,
  updateTask,
  deleteTask,
  getTask,
} from "../controllers/task.controllers.js";
import { isValidate } from "../middlewares/user.middleware.js";
import { createTaskSchema, updateTaskSchema } from "../schemas/task.schema.js";

const routes = Router();

routes.get("/", getTasks);

routes.get("/:id", getTask);

routes.post("/", isValidate(createTaskSchema), createTask);

routes.put("/:id", isValidate(updateTaskSchema), updateTask);

routes.delete("/:id", deleteTask);

export default routes;
