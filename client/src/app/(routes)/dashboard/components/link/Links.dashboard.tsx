import Link from "next/link";
import { type LinkProps } from "@/app/models/linkProps";

export function Links({ label, icon, href, pathname, key }: LinkProps) {
  return (
    <li key={key}>
      <Link
        href={href}
        className={`flex items-center gap-4 ${
          pathname === href ? "text-blue-600" : "text-zinc-500"
        }`}
      >
        <span>{icon}</span>
        <p className="font-semibold">{label}</p>
      </Link>
    </li>
  );
}
