import { Events } from "../events/Events.dashboard";

export function SecondSection() {
  return (
    <div className="flex flex-col gap-4">
      <Events />

      <div className="h-[275px] w-[365px] bg-zinc-300 dark:bg-zinc-700/40 rounded-xl dark:text-zinc-700/40">
        .
      </div>
    </div>
  );
}
