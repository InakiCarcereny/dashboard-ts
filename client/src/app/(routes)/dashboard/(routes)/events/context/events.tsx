"use client";

import { Id } from "@/app/context/task";
import {
  createEventRequest,
  deleteEventRequest,
  getAllEventsRequest,
  getEventRequest,
  updateEventRequest,
} from "@/app/interceptors/event";
import { createContext, useContext, useEffect, useState } from "react";

interface EventsContextType {
  events: Event[];
  error: string[];
  createEvent: (data: CreateEventRequest) => void;
  deleteEvent: (data: DeleteEventRequest) => void;
  getEvent: (id: Id) => Promise<Event>;
  updateEvent: (id: Id, event: UpdateEventRequest) => void;
}

export interface Event {
  _id?: string;
  dateInit: string;
  hourInit: string;
  dateEnd: string;
  hourEnd: string;
  title: string;
  createdAt?: string;
  updatedAt?: string;
}

export type CreateEventRequest = Omit<Event, "createdAt" | "updatedAt" | "_id">;

export type UpdateEventRequest = Omit<Event, "createdAt" | "updatedAt">;

export type DeleteEventRequest = Omit<Event, "createdAt" | "updatedAt">;

export const EventsContext = createContext<EventsContextType | undefined>(
  undefined
);

export function useEvents() {
  const context = useContext(EventsContext);

  if (!context) {
    throw new Error("useEvents must be used within a EventsProvider");
  }

  return context;
}

export function EventsProvider({ children }: { children: React.ReactNode }) {
  const [events, setEvents] = useState<Event[]>([]);
  const [error, setError] = useState([]);

  useEffect(() => {
    async function getEvents() {
      try {
        const res = await getAllEventsRequest();
        setEvents(res.data);
      } catch (err: any) {
        setError(err.response.data);
      }
    }
    getEvents();
  }, []);

  const createEvent = async (data: CreateEventRequest) => {
    try {
      if (events.length === 10) {
        return;
      }
      const res = await createEventRequest(data);
      setEvents((prevState) => [...prevState, res.data]);
    } catch (err: any) {
      setError(err.response.data);
    }
  };

  const deleteEvent = async (data: DeleteEventRequest) => {
    try {
      const res = await deleteEventRequest(data);
      if (res.status === 200) {
        setEvents((prevState) => prevState.filter((e) => e._id !== data._id));
      }
    } catch (err: any) {
      setError(err.response.data);
    }
  };

  const getEvent = async (id: Id) => {
    try {
      const res = await getEventRequest(id);
      return res.data;
    } catch (err: any) {
      setError(err.response.data);
    }
  };

  const updateEvent = async (id: Id, data: UpdateEventRequest) => {
    try {
      await updateEventRequest(id, data);
      setEvents((prevState) =>
        prevState.map((event) => (event._id === id ? data : event))
      );
    } catch (err: any) {
      setError(err.response.data);
    }
  };

  return (
    <EventsContext.Provider
      value={{
        events,
        error,
        createEvent,
        updateEvent,
        deleteEvent,
        getEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
}
