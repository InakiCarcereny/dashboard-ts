import axios from "@/app/interceptors/axios";
import { type Task } from "@/app/context/task";

export interface CreateTaskRequest {
  title: string;
  description: string;
  dueDate?: string;
}

export const getTasksRequest = async () => axios.get(`/task`);

export const createTaskRequest = async (data: CreateTaskRequest) =>
  axios.post(`/task`, data);

export const deleteTaskRequest = async (task: Task) =>
  axios.delete(`/task/${task._id}`);
