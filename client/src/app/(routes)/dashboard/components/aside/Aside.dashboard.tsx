import { Home } from "@/app/icons/home";
import { usePathname } from "next/navigation";
import { Links } from "../link/Links.dashboard";

const links = [
  {
    label: "Home",
    icon: Home(),
    href: "/dashboard",
  },
];

export function Aside() {
  const pathname = usePathname();
  return (
    <aside className="flex flex-col w-[300px] h-[925px]">
      <nav className="flex flex-col">
        <ul>
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
      </nav>
    </aside>
  );
}
