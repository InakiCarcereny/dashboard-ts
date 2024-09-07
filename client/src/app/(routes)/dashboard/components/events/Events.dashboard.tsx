import { Dot } from "@/app/icons/dot";
import { Pin } from "@/app/icons/pin";

export function Events() {
  return (
    <div className="h-[600px] w-full bg-zinc-300 dark:bg-zinc-700/40 rounded-xl dark:text-zinc-700/40 px-4 py-2 flex flex-col">
      <span className="flex items-center gap-2 font-semibold text-sm dark:text-white">
        <Pin />
        Upcoming Events
      </span>
      <div className="flex gap-2 mt-6">
        <span className="text-blue-600">
          <Dot />
        </span>
        <div className="flex flex-col">
          <span className="text-xs font-semibold dark:text-white/60 text-zinc-700">
            Jan 16, 2024 - 13:00 - Jan 17, 2024 - 13:00
          </span>
          <p className="font-semibold dark:text-white">Annual Meeting</p>
        </div>
      </div>

      <div className="flex gap-2 mt-6">
        <span className="text-blue-600">
          <Dot />
        </span>
        <div className="flex flex-col">
          <span className="text-xs font-semibold dark:text-white/60 text-zinc-700">
            Jan 16, 2024 - 13:00 - Jan 17, 2024 - 13:00
          </span>
          <p className="font-semibold dark:text-white">Annual Meeting</p>
        </div>
      </div>

      <div className="flex gap-2 mt-6">
        <span className="text-blue-600">
          <Dot />
        </span>
        <div className="flex flex-col">
          <span className="text-xs font-semibold dark:text-white/60 text-zinc-700">
            Jan 16, 2024 - 13:00 - Jan 17, 2024 - 13:00
          </span>
          <p className="font-semibold dark:text-white">Annual Meeting</p>
        </div>
      </div>

      <div className="flex gap-2 mt-6">
        <span className="text-blue-600">
          <Dot />
        </span>
        <div className="flex flex-col">
          <span className="text-xs font-semibold dark:text-white/60 text-zinc-700">
            Jan 16, 2024 - 13:00 - Jan 17, 2024 - 13:00
          </span>
          <p className="font-semibold dark:text-white">Annual Meeting</p>
        </div>
      </div>

      <div className="flex gap-2 mt-6">
        <span className="text-blue-600">
          <Dot />
        </span>
        <div className="flex flex-col">
          <span className="text-xs font-semibold dark:text-white/60 text-zinc-700">
            Jan 16, 2024 - 13:00 - Jan 17, 2024 - 13:00
          </span>
          <p className="font-semibold dark:text-white">Annual Meeting</p>
        </div>
      </div>

      <div className="flex gap-2 mt-6">
        <span className="text-blue-600">
          <Dot />
        </span>
        <div className="flex flex-col">
          <span className="text-xs font-semibold dark:text-white/60 text-zinc-700">
            Jan 16, 2024 - 13:00 - Jan 17, 2024 - 13:00
          </span>
          <p className="font-semibold dark:text-white">Annual Meeting</p>
        </div>
      </div>
    </div>
  );
}
