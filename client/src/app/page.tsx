import Link from "next/link";
import { ArrowRight } from "./icons/arrowRight";
import { Dashboard } from "./icons/dashboard";

const buttons = [
  {
    label: "Log in",
    icon: ArrowRight(),
    href: "/login",
  },
  {
    label: "Register",
    icon: ArrowRight(),
    href: "/register",
  },
];

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen">
      <div className="flex items-center justify-center gap-4">
        <Dashboard />
        <h1 className="font-semibold text-4xl">Welcome to the dashboard</h1>
      </div>

      <div className="flex items-center justify-center gap-8 mt-16">
        {buttons.map((button, index) => {
          return (
            <Link key={index} href={button.href}>
              <button className="flex items-center justify-center gap-4 bg-blue-600 px-4 py-2 hover:rounded-xl duration-200 text-white font-semibold">
                {button.label}
                {button.icon}
              </button>
            </Link>
          );
        })}
      </div>
    </section>
  );
}
