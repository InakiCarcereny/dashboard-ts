import axios from "@/app/interceptors/axios";

export interface CreateTaskRequest {
  title: string;
  description: string;
  dueDate?: string;
}

export const getTasksRequest = async () => axios.get(`/task`);

export const createTaskRequest = async (data: CreateTaskRequest) =>
  axios.post(`/task`, data);
