import { Home } from "@/app/icons/home";
import { usePathname } from "next/navigation";
import { Links } from "../link/Links.dashboard";
import { Calendar } from "@/app/icons/calendar";
import { Phone } from "@/app/icons/phone";
import { Paper } from "@/app/icons/paper";
import { useUser } from "@/app/context/user";
import { useState } from "react";
import { Buttons } from "../buttons/Buttons.dashboard";
import { Folder } from "@/app/icons/folder";
import { Balloon } from "@/app/icons/balloon";
import { FormModal } from "../formModal/FormModal.dashboard";
import { Building } from "@/app/icons/building";

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

export function Aside() {
  const pathname = usePathname();
  const { logOut } = useUser();

  const [isExpanded, setIsExpanded] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const [open, setOpen] = useState(false);

  return (
    <aside
      className={`hidden 2xl:flex flex-col h-[905px] relative ${
        isExpanded ? "w-[42px] duration-150" : "w-[250px] duration-150"
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
                index={index}
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
          open={open}
          setOpen={setOpen}
        />
      </nav>

      {open && <FormModal setOpen={setOpen} />}
    </aside>
  );
}
