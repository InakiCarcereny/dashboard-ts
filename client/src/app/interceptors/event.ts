import axios from "@/app/interceptors/axios";
import {
  type CreateEventRequest,
  DeleteEventRequest,
  UpdateEventRequest,
} from "../(routes)/dashboard/(routes)/events/context/events";
import { Id } from "../context/task";

export const getAllEventsRequest = async () => axios.get("/event");

export const getEventRequest = async (id: Id) => axios.get(`/event/${id}`);

export const createEventRequest = async (data: CreateEventRequest) =>
  axios.post("/event", data);

export const deleteEventRequest = async (data: DeleteEventRequest) =>
  axios.delete(`/event/${data._id}`);

export const updateEventRequest = async (id: Id, data: UpdateEventRequest) =>
  axios.put(`/event/${id}`, data);
