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

export function EventTable() {
  const { events, deleteEvent } = useEvents();
  return (
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
        {events.map((event) => (
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
  );
}
