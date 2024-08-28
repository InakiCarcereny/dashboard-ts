import { Bell } from "@/app/icons/bell";
import { Dashboard } from "@/app/icons/dashboard";
import { Hamburguer } from "@/app/icons/hamburguer";
import { Moon } from "@/app/icons/moon";
import { User } from "@/app/icons/user";

export function Header() {
  return (
    <header className="flex items-center h-[50px] w-full px-4 py-2">
      <nav className="flex items-center justify-between w-full">
        <div className="flex items-center gap-2">
          <Hamburguer />
          <h3 className="flex items-center font-semibold">
            <Dashboard />
            Dashboard
          </h3>
        </div>

        <div className="flex items-center gap-6">
          <Moon />
          <Bell />
          <User />
        </div>
      </nav>
    </header>
  );
}
