import { Coin } from "@/app/icons/coin";
import { Chart } from "../chart/Chart";
import { format } from "@formkit/tempo";

export function FirstSection() {
  const l = "es";
  const t = new Date();
  return (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4">
        <div className="flex flex-col gap-2 h-[200px] w-[600px] bg-zinc-300 dark:bg-zinc-700/40 rounded-xl dark:text-zinc-700/40 px-4 py-2">
          <span className="font-semibold dark:text-white text-xl">
            Earnings
          </span>
          <p className="font-semibol dark:text-white text-4xl">$ 5.500</p>
        </div>

        <div className="h-[200px] w-[600px] bg-zinc-300 dark:bg-zinc-700/40 rounded-xl dark:text-zinc-700/40 px-4 py-2">
          <span className="font-semibold dark:text-white text-xl">
            Number of tasks
          </span>
          <p className="font-semibol dark:text-white text-4xl">10</p>
        </div>
      </div>

      <div className="h-[385px] w-[1215px] bg-zinc-300 dark:bg-zinc-700/40 rounded-xl dark:text-zinc-700/40 px-4 py-2 flex flex-col gap-3">
        <span className="flex items-center gap-2 dark:text-white text-xl font-semibold">
          <Coin />
          Month Results
        </span>
        <Chart />
      </div>
      <div className="flex gap-4">
        <div className="h-[275px] w-[292px] bg-zinc-300 dark:bg-zinc-700/40 rounded-xl dark:text-zinc-700/40"></div>
        <div className="h-[275px] w-[292px] bg-zinc-300 dark:bg-zinc-700/40 rounded-xl dark:text-zinc-700/40">
          .
        </div>
        <div className="h-[275px] w-[292px] bg-zinc-300 dark:bg-zinc-700/40 rounded-xl dark:text-zinc-700/40">
          .
        </div>

        <div className="h-[275px] w-[292px] bg-zinc-300 dark:bg-zinc-700/40 rounded-xl dark:text-zinc-700/40 relative">
          <img
            className="w-full h-full rounded-xl"
            src="https://i.pinimg.com/564x/b3/22/f0/b322f0de06beef5351efc3a3fd432e1a.jpg"
          />
          <span className="font-semibold text-xl dark:text-black absolute bottom-2 right-0">
            {format(t, "h:mm:ss A", l)}
          </span>
        </div>
      </div>
    </div>
  );
}
