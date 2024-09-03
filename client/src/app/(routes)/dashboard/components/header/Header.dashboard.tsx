import { Bell } from "@/app/icons/bell";
import { Dashboard } from "@/app/icons/dashboard";
import { Hamburguer } from "@/app/icons/hamburguer";
import { ButtonProfile } from "../buttonProfile/ButtonProfile.dashboard";
import { ModeToggle } from "../theme/ToggleButton.dashboard";
import { useUser } from "@/app/context/user";

export function Header() {
  const { user } = useUser();
  return (
    <header className="flex items-center h-[70px] w-full px-4 py-2 bg-white dark:bg-zinc-900">
      <nav className="flex items-center justify-between w-full">
        <div className="flex items-center gap-6">
          <Hamburguer />
          <h3 className="flex items-center font-semibold text-black dark:text-white gap-2 text-sm">
            <Dashboard />
            Dashboard
          </h3>
        </div>

        <div className="font-semibold text-sm">
          Welcome {user?.username}, Have a Good Day 👋
        </div>

        <div className="flex items-center gap-6">
          <span className="bg-blue-600 rounded-full px-[0.5px] py-[0.5px]">
            <ModeToggle />
          </span>
          <button className="bg-blue-600  rounded-full px-2 py-2">
            <Bell />
          </button>
          <span className="bg-blue-600 rounded-full px-[2px] py-[2px]">
            <ButtonProfile />
          </span>
        </div>
      </nav>
    </header>
  );
}
