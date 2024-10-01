import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Ballpen } from "@/app/icons/ballpen";
import { Trash } from "@/app/icons/trash";
import { useEvents } from "../../context/events";
import { useEffect, useState } from "react";

export function EventTable({ query }: { query: string }) {
  const { events, deleteEvent } = useEvents();
  const [message, setMessage] = useState("");

  const filteredEvents = events.filter((event) =>
    event.title.toLocaleLowerCase().includes(query)
  );

  useEffect(() => {
    if (events.length === 10) {
      setMessage("You can only have 10 events at the moment");
      return;
    }
  }, [events]);

  return (
    <>
      <Table>
        <TableHeader>
          <TableRow className="w-full border-none">
            <TableHead className="w-[400px] font-semibold text-blue-600 text-xl">
              Event
            </TableHead>
            <TableHead className="w-[400px] font-semibold text-blue-600 text-xl">
              Date init
            </TableHead>
            <TableHead className="w-[400px] font-semibold text-blue-600 text-xl">
              Hour init
            </TableHead>
            <TableHead className="w-[400px] font-semibold text-blue-600 text-xl">
              Date end
            </TableHead>
            <TableHead className="w-[400px] font-semibold text-blue-600 text-xl">
              Hour end
            </TableHead>
            <TableHead className="w-[400px] font-semibold text-blue-600 text-xl">
              Actions
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {filteredEvents.map((event) => (
            <TableRow
              key={event._id}
              className="font-semibold hover:bg-zinc-300 dark:hover:bg-zinc-700/40 border-none"
            >
              <TableCell>{event.title}</TableCell>
              <TableCell>{event.dateInit}</TableCell>
              <TableCell>{event.hourInit}</TableCell>
              <TableCell>{event.dateEnd}</TableCell>
              <TableCell>{event.hourEnd}</TableCell>
              <TableCell className="flex items-center gap-2">
                <button className="px-2 py-2 rounded-full cursor-pointer">
                  <Ballpen />
                </button>
                <button
                  onClick={() => deleteEvent(event)}
                  className="px-2 py-2 rounded-full cursor-pointer"
                >
                  <Trash />
                </button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <p className="text-red-500 text-sm font-semibold">{message}</p>
    </>
  );
}
