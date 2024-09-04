"use client";

import { createContext, useContext, useEffect, useState } from "react";
import { createTaskRequest, getTasksRequest } from "../interceptors/task";
import { type CreateTaskRequest } from "../interceptors/task";

type TaskContextType = {
  tasks: Task[];
  error: string[];
  createTask: (data: CreateTaskRequest) => void;
  updateTask: () => void;
  deleteTask: () => void;
};

type Task = {
  _id: string;
  title: string;
  description: string;
  dueDate: string;
};

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
      const res = await createTaskRequest(data);
      console.log(res);
      setTasks((prevState) => [...prevState, res.data]);
    } catch (err: any) {
      console.log(err);
      setError(err.response.data);
    }
  };

  const deleteTask = async () => {};

  const updateTask = async () => {};

  return (
    <TaskContext.Provider
      value={{
        tasks,
        error,
        createTask,
        updateTask,
        deleteTask,
      }}
    >
      {children}
    </TaskContext.Provider>
  );
}
