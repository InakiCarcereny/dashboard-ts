import { Dot } from "@/app/icons/dot";
import { Pin } from "@/app/icons/pin";
import { useEvents } from "../../(routes)/events/context/events";

export function Events() {
  const { events } = useEvents();
  return (
    <div className="h-[600px] w-full bg-zinc-300 dark:bg-zinc-700/40 rounded-xl dark:text-zinc-700/40 px-4 py-2 flex flex-col">
      <span className="flex items-center gap-2 font-semibold text-sm dark:text-white">
        <Pin />
        Upcoming Events
      </span>

      <ul className="flex flex-col gap-2 mt-6">
        {events.slice(0, 8).map((event) => (
          <li key={event._id} className="flex gap-2">
            <span className="text-blue-600">
              <Dot />
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-semibold dark:text-white/60 text-zinc-700">
                {event.dateInit} - {event.hourInit} - {event.dateEnd} -{" "}
                {event.hourEnd}
              </span>
              <p className="font-semibold dark:text-white">{event.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
