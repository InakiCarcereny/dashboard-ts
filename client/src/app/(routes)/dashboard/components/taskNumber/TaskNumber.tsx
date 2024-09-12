import { useTask } from "@/app/context/task";
import { File } from "@/app/icons/file";

export function TaskNumber() {
  const { tasks } = useTask();

  return (
    <div className="h-[200px] w-full sm:w-full md-full lg-full xl:w-[600px] bg-zinc-300 dark:bg-zinc-700/40 rounded-xl dark:text-zinc-700/40 px-4 py-2">
      <span className="flex items-center gap-2 font-semibold dark:text-white text-sm">
        <File />
        Number of tasks
      </span>
      <p className="font-semibol dark:text-white text-4xl">{tasks.length}</p>
    </div>
  );
}
