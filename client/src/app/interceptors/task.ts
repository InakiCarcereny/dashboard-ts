import axios from "@/app/interceptors/axios";
import { updateTask, type Task } from "@/app/context/task";
import { Id } from "@/app/context/task";

export interface CreateTaskRequest {
  title: string;
  description: string;
  dueDate?: string;
}

export const getTasksRequest = async () => axios.get(`/task`);

export const getTaskRequest = async (id: Id) => axios.get(`/task/${id}`);

export const createTaskRequest = async (data: CreateTaskRequest) =>
  axios.post(`/task`, data);

export const deleteTaskRequest = async (task: Task) =>
  axios.delete(`/task/${task._id}`);

export const updateTaskRequest = async (id: Id, task: updateTask) =>
  axios.put(`/task/${id}`, task);
