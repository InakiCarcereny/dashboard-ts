import { Folder } from "@/app/icons/folder";

export function PrevActivities() {
  return (
    <div className="h-[275px] w-full sm:w-full md-full lg-full xl:w-[292px] bg-zinc-300 dark:bg-zinc-700/40 rounded-xl dark:text-zinc-700/40 px-4 py-2">
      <span className="flex items-center gap-2 dark:text-white text-sm font-semibold">
        <Folder className="text-blue-600" />
        Latest Activities
      </span>
    </div>
  );
}
