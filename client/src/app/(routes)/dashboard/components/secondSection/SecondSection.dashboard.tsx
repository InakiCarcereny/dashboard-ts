import { useState } from "react";
import { Events } from "../events/Events.dashboard";
import { Calendar } from "@/components/ui/calendar";

export function SecondSection() {
  const [date, setDate] = useState<Date | undefined>(new Date());
  return (
    <div className="flex flex-col gap-4">
      <Events />

      <div className="h-[275px] w-[375px] bg-zinc-300 dark:bg-zinc-700/40 rounded-xl flex items-center justify-center">
        <Calendar
          mode="single"
          selected={date}
          onSelect={setDate}
          className="dark:text-white  text-black"
        />
      </div>
    </div>
  );
}
