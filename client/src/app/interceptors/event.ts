import axios from "@/app/interceptors/axios";
import {
  type CreateEventRequest,
  DeleteEventRequest,
  UpdateEventRequest,
} from "../(routes)/dashboard/(routes)/events/context/events";

export const getAllEventsRequest = async () => axios.get("/event");

export const createEventRequest = async (data: CreateEventRequest) =>
  axios.post("/event", data);

export const updateEventRequest = async (data: DeleteEventRequest) =>
  axios.put(`/event/${data._id}`, data);

export const deleteEventRequest = async (data: UpdateEventRequest) =>
  axios.delete(`/event/${data._id}`);
