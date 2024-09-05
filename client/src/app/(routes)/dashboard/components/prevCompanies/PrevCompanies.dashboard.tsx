import { Building } from "@/app/icons/building";

export function PrevCompanies() {
  return (
    <div className="h-[275px] w-[292px] bg-zinc-300 dark:bg-zinc-700/40 rounded-xl dark:text-zinc-700/40 px-4 py-2">
      <span className="flex items-center gap-2 dark:text-white text-xl font-semibold">
        <Building className="text-blue-600" />
        Companies
      </span>
    </div>
  );
}
