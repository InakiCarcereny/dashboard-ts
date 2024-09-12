import { Events } from "../events/Events.dashboard";
import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";

export function SecondSection() {
  const localizer = dayjsLocalizer(dayjs);
  return (
    <div className="flex flex-col gap-4 w-full">
      <Events />

      <div className="h-[275px] w-full">
        <Calendar
          localizer={localizer}
          events={[]}
          startAccessor="start"
          endAccessor="end"
          toolbar={false}
          className="dark:text-white text-black"
        />
      </div>
    </div>
  );
}
