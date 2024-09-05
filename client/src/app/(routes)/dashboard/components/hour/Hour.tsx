import { format } from "@formkit/tempo";

export function Hour() {
  const l = "es";
  const t = new Date();
  return (
    <div className="h-[275px] w-[292px] bg-zinc-300 dark:bg-zinc-700/40 rounded-xl dark:text-zinc-700/40 relative">
      <img
        className="w-full h-full rounded-xl"
        src="https://i.pinimg.com/564x/b3/22/f0/b322f0de06beef5351efc3a3fd432e1a.jpg"
      />
      <span className="font-semibold text-xl dark:text-black absolute bottom-2 right-0">
        {format(t, "h:mm:ss A", l)}
      </span>
    </div>
  );
}
