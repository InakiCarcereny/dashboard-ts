import { Graph } from "@/app/icons/graph";
import { Chart } from "../chart/Chart";

export function MonthResults() {
  return (
    <div className="h-[385px] w-[1215px] bg-zinc-300 dark:bg-zinc-700/40 rounded-xl dark:text-zinc-700/40 px-4 py-2 flex flex-col gap-3">
      <span className="flex items-center gap-2 dark:text-white text-sm font-semibold">
        <Graph />
        Month Results
      </span>
      <Chart />
    </div>
  );
}
