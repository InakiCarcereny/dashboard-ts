import { Home } from "@/app/icons/home";
import { usePathname } from "next/navigation";
import { Links } from "../link/Links.dashboard";
import { Calendar } from "@/app/icons/calendar";
import { Phone } from "@/app/icons/phone";
import { Paper } from "@/app/icons/paper";
import { useUser } from "@/app/context/user";
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
    icon: Phone(),
    href: "/dashboard/contacts",
  },
];

export function Aside() {
  const pathname = usePathname();
  const { logOut } = useUser();

  return (
    <aside className="flex flex-col w-[300px] h-[905px]">
      <nav className="flex flex-col h-full justify-between">
        <ul className="flex flex-col gap-2">
          {links.map((link, index) => {
            return (
              <Links
                label={link.label}
                icon={link.icon}
                href={link.href}
                key={index}
                pathname={pathname}
              />
            );
          })}
        </ul>
        <button
          onClick={logOut}
          className="flex items-center mb-2 gap-4 px-2 py-2 rounded-xl duration-200 hover:bg-zinc-700/40 text-white font-semibold"
        >
          <ArrowLeft />
          Log out
        </button>
      </nav>
    </aside>
  );
}
