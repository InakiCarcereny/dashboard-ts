"use client";

import { createContext, useContext, useEffect, useState } from "react";
import {
  createTaskRequest,
  deleteTaskRequest,
  getTaskRequest,
  getTasksRequest,
} from "../interceptors/task";
import { type CreateTaskRequest } from "../interceptors/task";

type TaskContextType = {
  tasks: Task[];
  error: string[];
  createTask: (data: CreateTaskRequest) => void;
  updateTask: () => void;
  deleteTask: (task: Task) => void;
  getTask: (task: Task) => void;
};

export type Task = {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
};

export type TaskId = Pick<Task, "_id">;

export const TaskContext = createContext<TaskContextType | undefined>(
  undefined
);

export function useTask() {
  const context = useContext(TaskContext);

  if (!context) {
    throw new Error("useUser must be used within a UserProvider");
  }

  return context;
}

export function TaskProvider({ children }: { children: React.ReactNode }) {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    async function getTasks() {
      try {
        const res = await getTasksRequest();
        setTasks(res.data);
      } catch (err: any) {
        setError(err.response.data);
      }
    }

    getTasks();
  }, []);

  const createTask = async (data: CreateTaskRequest) => {
    try {
      if (tasks.length === 10) {
        return;
      }
      const res = await createTaskRequest(data);
      setTasks((prevState) => [...prevState, res.data]);
    } catch (err: any) {
      console.log(err);
      setError(err.response.data);
    }
  };

  const deleteTask = async (task: Task) => {
    try {
      const res = await deleteTaskRequest(task);
      if (res.status === 200) {
        setTasks((prevState) => prevState.filter((t) => t._id !== task._id));
      }
    } catch (err: any) {
      setError(err.response.data);
    }
  };

  const getTask = async (task: Task) => {
    try {
      const res = await getTaskRequest(task);
      setTasks((prevState) => [...prevState, res.data]);
    } catch (err: any) {
      setError(err.response.data);
    }
  };

  const updateTask = async () => {};

  return (
    <TaskContext.Provider
      value={{
        tasks,
        error,
        createTask,
        updateTask,
        deleteTask,
        getTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
