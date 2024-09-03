import Task from "../models/task.model.js";

export const getTasks = async (req, res) => {
  try {
    const tasks = await Task.find({
      user: req.user._id,
    });
    res.status(200).json(tasks);
  } catch (err) {
    res.status(500).json({ message: "Error getting tasks" });
  }
};

export const createTask = async (req, res) => {
  try {
    const { title, description, dueDate } = req.body;
    console.log(req.data);

    const task = new Task({
      title,
      description,
      dueDate,
      user: req.user._id,
    });

    const newTask = await task.save();

    res.status(201).json(newTask);
  } catch (err) {
    res.status(500).json({ message: "Error creating task" });
  }
};

export const updateTask = async (req, res) => {
  try {
    const { _id } = req.params;
    const { title, description, dueDate } = req.body;

    const updateTask = await Task.findByIdAndUpdate(
      {
        _id,
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
    const { _id } = req.params;

    const deleteTask = await Task.findByIdAndDelete(_id);

    if (!deleteTask) {
      return res.status(404).json({ message: "Task not found" });
    }

    res.status(200).json({ message: "Task deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: "Error deleting task" });
  }
};
