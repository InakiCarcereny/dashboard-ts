import { Router } from "express";

import {
  getAllEvents,
  createEvent,
  updateEvent,
  deleteEvent,
} from "../controllers/event.controllers.js";

const routes = Router();

routes.get("/", getAllEvents);

routes.post("/", createEvent);

routes.put("/:id", updateEvent);

routes.delete("/:id", deleteEvent);

export default routes;
