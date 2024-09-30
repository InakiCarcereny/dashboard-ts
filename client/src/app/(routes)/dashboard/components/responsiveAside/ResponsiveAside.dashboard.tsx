import { Dashboard } from "@/app/icons/dashboard";
import { Hamburguer } from "@/app/icons/hamburguer";
import Link from "next/link";
import { ModeToggle } from "../theme/ToggleButton.dashboard";
import { ArrowLeft } from "@/app/icons/arrowLeft";
import { User } from "@/app/models/user";
import { LinkProps } from "@/app/models/linkProps";

interface ResponsiveAsideProps {
  onCollapse: () => void;
  onLogOut: () => void;
  links: LinkProps[];
  pathname: string;
  user: User | null;
}

export function ResponsiveAside({
  onCollapse,
  onLogOut,
  links,
  pathname,
  user,
}: ResponsiveAsideProps) {
  return (
    <aside className="fixed top-0 left-0 z-50 h-full w-[250px] bg-white dark:bg-zinc-900 flex flex-col justify-between px-4 py-4">
      <div>
        <header className="flex items-center gap-2">
          <button onClick={onCollapse}>
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
          onClick={onLogOut}
          className="flex items-center gap-4 font-semibold dark:text-white text-black hover:bg-zinc-300 dark:hover:bg-zinc-700/40 px-2 py-2 rounded-xl duration-200"
        >
          <ArrowLeft />
          Log out
        </button>
      </footer>
    </aside>
  );
}
