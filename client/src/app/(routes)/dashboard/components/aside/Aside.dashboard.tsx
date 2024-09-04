import { Home } from "@/app/icons/home";
import { usePathname } from "next/navigation";
import { Links } from "../link/Links.dashboard";
import { Calendar } from "@/app/icons/calendar";
import { Phone } from "@/app/icons/phone";
import { Paper } from "@/app/icons/paper";
import { useUser } from "@/app/context/user";
import { useState } from "react";
import { Buttons } from "../buttons/Buttons.dashboard";
import { List } from "@/app/icons/list";
import { Acces } from "@/app/icons/acces";
import { Folder } from "@/app/icons/folder";
import { Balloon } from "@/app/icons/balloon";

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
  {
    label: "Latest Activities",
    icon: Folder(),
    href: "/dashboard/latest-activities",
  },
  {
    label: "Events",
    icon: Balloon(),
    href: "/dashboard/events",
  },
];

export function Aside() {
  const pathname = usePathname();
  const { logOut } = useUser();

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <aside
      className={`flex flex-col h-[905px] ${
        isExpanded ? "w-[42px] duration-150" : "w-[200px] duration-150"
      }`}
    >
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
                isExpanded={isExpanded}
              />
            );
          })}
          <div className="border border-zinc-300 dark:border-zinc-700/40 w-full"></div>
        </ul>

        <Buttons
          isExpanded={isExpanded}
          toggleExpand={toggleExpand}
          logOut={logOut}
        />
      </nav>
    </aside>
  );
}
