import Link from "next/link";
import { type LinkProps } from "@/app/models/linkProps";

export function Links({
  label,
  icon,
  href,
  pathname,
  key,
  isExpanded,
}: LinkProps) {
  return (
    <li key={key}>
      <Link
        href={href}
        className={`flex items-center gap-4 px-2 py-2 rounded-xl duration-200 hover:bg-zinc-300 dark:hover:bg-zinc-700/40 ${
          pathname === href
            ? "text-blue-600 bg-zinc-300 dark:bg-zinc-700/40"
            : "text-black dark:text-white"
        }`}
      >
        <span>{icon}</span>
        <p className={`font-semibold ${isExpanded ? "hidden" : ""}`}>{label}</p>
      </Link>
    </li>
  );
}
