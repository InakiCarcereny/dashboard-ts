"use client";

import {
  createEventRequest,
  deleteEventRequest,
  getAllEventsRequest,
} from "@/app/interceptors/event";
import { createContext, useContext, useEffect, useState } from "react";

type EventsContextType = {
  events: Event[];
  error: string[];
  createEvent: (data: CreateEventRequest) => void;
  updateEvent: (data: UpdateEventRequest) => void;
  deleteEvent: (event: DeleteEventRequest) => void;
};

export type Event = {
  _id?: string;
  dateInit: string;
  hourInit: string;
  dateEnd: string;
  hourEnd: string;
  title: string;
  createdAt?: string;
  updatedAt?: string;
};

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

  const updateEvent = async (data: UpdateEventRequest) => {};

  return (
    <EventsContext.Provider
      value={{
        events,
        error,
        createEvent,
        updateEvent,
        deleteEvent,
      }}
    >
      {children}
    </EventsContext.Provider>
  );
}
