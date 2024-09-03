import { Router } from "express";
import {
  register,
  login,
  secure,
  logout,
} from "../controllers/user.controllers.js";
import { isValidate } from "../middlewares/user.middleware.js";
import { registerSchema, loginSchema } from "../schemas/user.schema.js";

const routes = Router();

routes.post("/register", isValidate(registerSchema), register);

routes.post("/login", isValidate(loginSchema), login);

routes.get("/verify", secure);

routes.post("/logout", logout);

export default routes;
