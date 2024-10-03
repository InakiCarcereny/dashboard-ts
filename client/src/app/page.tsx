import Link from "next/link";
import { ArrowRight } from "./icons/arrowRight";
import { Calendar } from "./icons/calendar";
import { Phone } from "./icons/phone";
import { File } from "./icons/file";

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
    <>
      <header className="bg-white shadow">
        <div className="container mx-auto flex justify-between items-center p-6">
          <div className="text-2xl font-bold text-blue-600">DashboardApp</div>
          <nav className="space-x-4">
            {buttons.map((button) => (
              <Link key={button.label} href={button.href}>
                <span className="text-white bg-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-blue-700 transition duration-300">
                  {button.label}
                </span>
              </Link>
            ))}
          </nav>
        </div>
      </header>

      <section id="hero" className="bg-blue-600 text-white text-center py-20">
        <div className="container mx-auto">
          <h1 className="text-4xl font-bold mb-4">
            Manage Your Tasks & Track Your Success
          </h1>
          <p className="mb-6">
            Keep your tasks organized, track your earnings, and stay on top of
            your schedule with our simple and intuitive dashboard.
          </p>
          <Link href="/login">
            <span className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
              Get Started for Free
            </span>
          </Link>
        </div>
      </section>

      <section id="features" className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center gap-4">
              <File />
              <div className="flex flex-col items-center">
                <h3 className="text-xl font-semibold mb-2">Task Management</h3>
                <p>Organize your tasks, set deadlines, and stay productive.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center gap-4">
              <Calendar />
              <div>
                <h3 className="text-xl font-semibold mb-2">Calendar</h3>
                <p>Keep track of your important dates and deadlines.</p>
              </div>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 flex flex-col items-center gap-4">
              <Phone />
              <div>
                <h3 className="text-xl font-semibold mb-2">Contacts</h3>
                <p>Manage your contacts and stay connected with ease.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-blue-600 text-white text-center py-10">
        <div className="container mx-auto">
          <h2 className="text-2xl font-bold mb-4">Ready to Get Started?</h2>
          <Link href="/register">
            <span className="bg-white text-blue-600 px-6 py-2 rounded-full font-semibold hover:bg-gray-200 transition duration-300">
              Sign Up Now
            </span>
          </Link>
        </div>
      </section>

      <section className="py-20">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold mb-10">What Our Users Say</h2>
          <div className="flex justify-center space-x-10">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
              <p className="italic">
                This app has transformed the way I manage my tasks!
              </p>
              <p className="font-semibold mt-4">- User 1</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md max-w-sm">
              <p className="italic">
                I love the calendar feature; it keeps me organized!
              </p>
              <p className="font-semibold mt-4">- User 2</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
