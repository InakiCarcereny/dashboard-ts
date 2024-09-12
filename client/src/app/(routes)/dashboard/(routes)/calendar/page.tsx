"use client";

import { Calendar, dayjsLocalizer } from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import dayjs from "dayjs";

export default function Page() {
  const localizer = dayjsLocalizer(dayjs);

  return (
    <div className="h-[98%] w-full">
      <Calendar
        localizer={localizer}
        events={[]}
        startAccessor="start"
        endAccessor="end"
      />
    </div>
  );
}
