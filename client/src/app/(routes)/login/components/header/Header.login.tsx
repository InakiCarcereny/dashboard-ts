import { Dashboard } from "@/app/icons/dashboard";
import Link from "next/link";

export function Header() {
  return (
    <>
      <h1 className="flex items-center gap-1 first-line:font-semibold text-2xl">
        <Dashboard />
        Dashboard
      </h1>

      <span className="mt-8 text-4xl">Log in to your account</span>

      <p className="mt-4 text-xl font-semibold text-zinc-600 flex items-center gap-2">
        Dont have an account?
        <Link className="font-semibold text-blue-600" href="/register">
          Sign up now
        </Link>
      </p>
    </>
  );
}
