import Task from "../models/task.model.js";
import jwt from "jsonwebtoken";
import User from "../models/user.model.js";
import { JWT_SECRET } from "../config.js";

export const getTasks = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }

  try {
    const user = jwt.verify(token, JWT_SECRET);
    const { id } = user;

    const userFind = await User.findById(id);

    if (!userFind) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const tasks = await Task.find({
      user: userFind._id,
    });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Error getting tasks" });
  }
};

export const createTask = async (req, res) => {
  const token = req.cookies.token;

  if (!token) {
    return res.status(401).json({ message: "Unauthorized" });
  }
  try {
    const user = jwt.verify(token, JWT_SECRET);
    const { id } = user;

    const userFind = await User.findById(id);

    if (!userFind) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { title, description, dueDate } = req.body;

    const task = new Task({
      title,
      description,
      dueDate,
      user: userFind._id,
    });

    const newTask = await task.save();

    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { id } = req.params;
    const { title, description, dueDate } = req.body;

    const updateTask = await Task.findByIdAndUpdate(
      {
        id,
      },
      {
        title,
        description,
        dueDate,
      },
      {
        new: true,
      }
    );
    res.status(200).json(updateTask);
  } catch (err) {
    res.status(500).json({ message: "Error updating task" });
  }
};

export const deleteTask = async (req, res) => {
  try {
    const { id } = req.params;

    const deleteTask = await Task.findByIdAndDelete(id);

    if (!deleteTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting task" });
  }
};
