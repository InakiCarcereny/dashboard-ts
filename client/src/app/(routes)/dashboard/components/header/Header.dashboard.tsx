import { Bell } from "@/app/icons/bell";
import { Dashboard } from "@/app/icons/dashboard";
import { ButtonProfile } from "../buttonProfile/ButtonProfile.dashboard";
import { ModeToggle } from "../theme/ToggleButton.dashboard";
import { useUser } from "@/app/context/user";
import { Search } from "@/app/icons/search";
import { Notifications } from "../notifications/Notifications.dashboard";

export function Header() {
  const { user } = useUser();
  return (
    <header className="flex items-center h-[70px] w-full px-4 py-2 bg-white dark:bg-zinc-900">
      <nav className="flex items-center justify-between w-full">
        <div className="flex items-center gap-6">
          <h3 className="flex items-center font-semibold text-black dark:text-white gap-2 text-lg">
            <Dashboard />
            Dashboard
          </h3>
        </div>

        <div className="dark:bg-zinc-700/40 bg-zinc-300 rounded-xl border-none px-2 py-2 flex items-center gap-4 w-[600px]">
          <Search />
          <input
            type="text"
            className="bg-transparent focus:outline-none text-sm font-base w-full"
            placeholder="Search..."
          />
        </div>

        <div className="flex items-center gap-6">
          <span className="bg-blue-600 rounded-full px-[0.5px] py-[0.5px]">
            <ModeToggle />
          </span>
          <span className="bg-blue-600  rounded-full px-[2px] py-[2px]">
            <Notifications />
          </span>
          <span className="bg-blue-600 rounded-full px-[2px] py-[2px] flex items-center gap-2">
            <ButtonProfile />
          </span>
          <div className="flex flex-col">
            <span className="text-xs font-semibold text-zinc-600 dark:text-white/60">
              Hi {user?.username}! 👋
            </span>
            <span className="text-sm font-semibold">{user?.email}</span>
          </div>
        </div>
      </nav>
    </header>
  );
}
