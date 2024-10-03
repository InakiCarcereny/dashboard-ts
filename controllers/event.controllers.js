import { JWT_SECRET } from "../config.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import Event from "../models/event.model.js";

export const getEvent = async (req, res) => {
  const { id } = req.params;

  try {
    const event = await Event.findById(id);

    if (!event) {
      return res.status(404).json({ message: "Event not found" });
    }

    res.status(200).json(event);
  } catch (err) {
    res.status(500).json({ message: "Error getting event" });
  }
};

export const getAllEvents = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" }); // Añadir 'return' para evitar continuar
  }

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const { id } = user;

    const userFind = await User.findById(id);

    if (!userFind) {
      return res.status(401).json({ message: "Unauthorized" }); // Añadir 'return' aquí también
    }

    const events = await Event.find({
      user: userFind._id,
    });

    res.status(200).json(events);
  } catch (err) {
    if (!res.headersSent) {
      res.status(500).json({ message: "Error getting events" });
    }
  }
};

export const createEvent = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" }); // Añadir 'return' para evitar continuar
  }

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const { id } = user;

    const userFind = await User.findById(id);

    if (!userFind) {
      return res.status(401).json({ message: "Unauthorized" }); // Añadir 'return' aquí también
    }

    const { dateInit, hourInit, dateEnd, hourEnd, title } = req.body;

    const event = new Event({
      dateInit,
      hourInit,
      dateEnd,
      hourEnd,
      title,
      user: userFind._id,
    });

    const savedEvent = await event.save();

    res.status(201).json(savedEvent);
  } catch (err) {
    if (!res.headersSent) {
      res.status(500).json({ message: "Error creating event" });
    }
  }
};

export const updateEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const { dateInit, hourInit, dateEnd, hourEnd, title } = req.body;

    const updateEvent = await Event.findByIdAndUpdate(
      id, // Asegúrate de usar `id` correctamente
      {
        dateInit,
        hourInit,
        dateEnd,
        hourEnd,
        title,
      },
      {
        new: true,
      }
    );

    res.status(200).json(updateEvent);
  } catch (err) {
    if (!res.headersSent) {
      res.status(500).json({ message: "Error updating event" });
    }
  }
};

export const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteEvent = await Event.findByIdAndDelete(id);

    if (!deleteEvent) {
      return res.status(404).json({ message: "Event not found" }); // Añadir 'return' para evitar continuar
    }

    res.status(200).json({ message: "Event deleted successfully" });
  } catch (err) {
    if (!res.headersSent) {
      res.status(500).json({ message: "Error deleting event" });
    }
  }
};
