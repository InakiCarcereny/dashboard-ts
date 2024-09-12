import { Dashboard } from "@/app/icons/dashboard";
import { ModeToggle } from "../theme/ToggleButton.dashboard";
import { useUser } from "@/app/context/user";
import { Search } from "@/app/icons/search";
import { Notifications } from "../notifications/Notifications.dashboard";
import { Hamburguer } from "@/app/icons/hamburguer";
import { useState } from "react";
import { Calendar } from "@/app/icons/calendar";
import { Paper } from "@/app/icons/paper";
import { Phone } from "@/app/icons/phone";
import { Folder } from "@/app/icons/folder";
import { Balloon } from "@/app/icons/balloon";
import { Building } from "@/app/icons/building";
import Link from "next/link";
import { Home } from "@/app/icons/home";
import { usePathname } from "next/navigation";
import { ArrowLeft } from "@/app/icons/arrowLeft";

const links = [
  {
    label: "Home",
    icon: Home(),
    href: "/dashboard",
  },
  {
    label: "Calendar",
    icon: Calendar(),
    href: "/dashboard/calendar",
  },
  {
    label: "Tasks",
    icon: Paper(),
    href: "/dashboard/tasks",
  },
  {
    label: "Contacts",
    icon: Phone({}),
    href: "/dashboard/contacts",
  },
  {
    label: "Latest Activities",
    icon: Folder({}),
    href: "/dashboard/latest-activities",
  },
  {
    label: "Events",
    icon: Balloon(),
    href: "/dashboard/events",
  },
  {
    label: "Companies",
    icon: Building({}),
    href: "/dashboard/companies",
  },
];

export function Header() {
  const { user, logOut } = useUser();
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  const toggleOpen = () => {
    setOpen(!open);
  };

  const toggleCollapse = () => {
    setOpen(false);
  };

  return (
    <>
      <header className="flex items-center h-[70px] w-full px-4 py-2 bg-white dark:bg-zinc-900">
        <nav className="flex items-center justify-between w-full gap-4 md:gap-0">
          <div className="flex items-center gap-6">
            <h3 className="flex items-center font-semibold text-black dark:text-white gap-2 text-lg">
              <button className="block 2xl:hidden" onClick={toggleOpen}>
                <Hamburguer />
              </button>
              <div className="hidden 2xl:flex items-center gap-2">
                <Dashboard />
                Dashboard
              </div>
            </h3>
          </div>

          <div className="dark:bg-zinc-700/40 bg-zinc-300 rounded-xl border-none px-2 py-2 flex items-center gap-4 w-full md:w-[400px] xl:w-[600px]">
            <Search />
            <input
              type="text"
              className="bg-transparent focus:outline-none text-sm font-base w-full"
              placeholder="Search..."
            />
          </div>

          <div className="hidden md:flex items-center gap-4">
            <span className="bg-blue-600 rounded-full px-[1.5px] py-[1.5px]">
              <ModeToggle />
            </span>
            <span className="bg-blue-600  rounded-full px-[2px] py-[2px]">
              <Notifications />
            </span>
            <img
              src={`https://api.dicebear.com/9.x/initials/svg?seed=${user?.username}`}
              alt="avatar"
              className="rounded-full h-11 w-11"
            ></img>
            <div className="flex flex-col">
              <span className="text-xs font-semibold text-zinc-600 dark:text-white/60">
                Hi {user?.username}! 👋
              </span>
              <span className="text-sm font-semibold">{user?.email}</span>
            </div>
          </div>
        </nav>
      </header>

      {open && (
        <aside className="fixed top-0 left-0 z-50 h-full w-[250px] bg-white dark:bg-zinc-900 flex flex-col justify-between px-4 py-4">
          <div>
            <header className="flex items-center gap-2">
              <button onClick={toggleCollapse}>
                <Hamburguer />
              </button>
              <h3 className="flex items-center font-semibold dark:text-white text-dark gap-2">
                <Dashboard />
                Dashboard
              </h3>
            </header>

            <nav className="flex flex-col h-full w-full mt-4">
              <ul className="flex flex-col gap-2">
                {links.map((link) => {
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className={`flex items-center gap-4 px-2 py-2 rounded-xl duration-200 hover:bg-zinc-300 dark:hover:bg-zinc-700/40 ${
                          pathname === link.href
                            ? "text-blue-600 bg-zinc-300 dark:bg-zinc-700/40"
                            : "text-black dark:text-white"
                        }`}
                      >
                        <span className="font-semibold">{link.label}</span>
                        {link.icon}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          </div>

          <footer className="flex flex-col gap-4">
            <div className="flex items-center gap-4 px-2 md:hidden">
              <img
                src={`https://api.dicebear.com/9.x/initials/svg?seed=${user?.username}`}
                alt="avatar"
                className="rounded-full h-6 w-6"
              />
              <div className="flex flex-col">
                <span className="text-xs font-semibold text-zinc-600 dark:text-white/60">
                  Hi {user?.username}! 👋
                </span>
                <span className="text-sm font-semibold">{user?.email}</span>
              </div>
            </div>

            <span className="px-[1.5px] py-[1.5px] flex items-center gap-2 font-semibold dark:text-white text-sm hover:bg-zinc-300 dark:hover:bg-zinc-700/40 rounded-xl md:hidden">
              <ModeToggle />
              Change theme
            </span>

            <button
              onClick={logOut}
              className="flex items-center gap-4 font-semibold dark:text-white text-black hover:bg-zinc-300 dark:hover:bg-zinc-700/40 px-2 py-2 rounded-xl duration-200"
            >
              <ArrowLeft />
              Log out
            </button>
          </footer>
        </aside>
      )}
    </>
  );
}
