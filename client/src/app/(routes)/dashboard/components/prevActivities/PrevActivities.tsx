import { ArrowMinRight } from "@/app/icons/arrowMinRight";
import { Folder } from "@/app/icons/folder";
import activities from "@/app/mocks/activities.json";
import Link from "next/link";

export function PrevActivities() {
  return (
    <div className="h-[275px] w-full sm:w-full md-full lg-full xl:w-[292px] bg-zinc-300 dark:bg-zinc-700/40 rounded-xl dark:text-zinc-700/40 px-4 py-2 flex flex-col justify-between">
      <div>
        <span className="flex items-center gap-2 dark:text-white text-sm font-semibold">
          <Folder className="text-blue-600" />
          Latest Activities
        </span>

        <ul className="flex flex-col gap-2 mt-3">
          {activities.slice(0, 3).map((activity) => {
            return (
              <li
                className="flex items-center gap-4"
                key={activity.companyName}
              >
                <img
                  className="w-10 h-10 rounded-xl"
                  src={activity.logo}
                  alt={activity.companyName}
                />
                <div className="flex flex-col font-semibold">
                  <span className="text-sm text-black dark:text-white">
                    {activity.companyName}
                  </span>
                  <span className="text-xs text-zinc-700 dark:text-white/60">
                    {activity.activity.description}
                  </span>
                </div>
              </li>
            );
          })}
        </ul>
      </div>
      <Link
        href="/dashboard/latest-activities"
        className="text-sm dark:text-white text-black font-semibold hover:text-blue-600 dark:hover:text-blue-600 duration-150 cursor-pointer flex items-center gap-2"
      >
        See more
        <ArrowMinRight />
      </Link>
    </div>
  );
}
