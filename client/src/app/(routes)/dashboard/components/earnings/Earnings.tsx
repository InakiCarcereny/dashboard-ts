import { Coin } from "@/app/icons/coin";

export function Earnings() {
  return (
    <div className="flex flex-col gap-2 h-[200px] w-[600px] bg-zinc-300 dark:bg-zinc-700/40 rounded-xl dark:text-zinc-700/40 px-4 py-2">
      <span className="flex items-center gap-2 font-semibold dark:text-white text-sm">
        <Coin />
        Earnings
      </span>
      <p className="font-semibol dark:text-white text-4xl">$ 5.500</p>
    </div>
  );
}
