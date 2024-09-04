import Link from "next/link";
import { ArrowRight } from "./icons/arrowRight";
import { Dashboard } from "./icons/dashboard";
import "../app/styles/landing.css";

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
    <section className="flex items-center min-h-screen justify-center gap-8">
      <div className="flex flex-col">
        <div className="flex items-center justify-center gap-4">
          <Dashboard />
          <h1 className="font-semibold text-4xl text-black">
            Welcome to the dashboard
          </h1>
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
      </div>

      <div className="w-[500px] h-[500px]">
        <img
          src="https://i.pinimg.com/564x/55/92/d3/5592d36c450bcf881cea45c15c9f8ceb.jpg"
          className="w-full h-full"
        />
      </div>
    </section>
  );
}
