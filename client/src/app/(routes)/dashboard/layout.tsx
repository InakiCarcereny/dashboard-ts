"use client";

import { Poppins } from "next/font/google";
import { Header } from "./components/header/Header.dashboard";
import { Aside } from "./components/aside/Aside.dashboard";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="bg-slate-100">
      <body className={`${poppins.className}`}>
        <Header />

        <section className="flex gap-20 w-screen mt-6 px-4">
          <Aside />

          <main className="bg-zinc-200 w-full">{children}</main>
        </section>
      </body>
    </html>
  );
}
