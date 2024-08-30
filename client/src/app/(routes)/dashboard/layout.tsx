"use client";

import { Poppins } from "next/font/google";
import { Header } from "./components/header/Header.dashboard";
import { Aside } from "./components/aside/Aside.dashboard";
import { useUser } from "@/app/context/user";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isAuthenticated, isLoading } = useUser();
  const router = useRouter();

  useEffect(() => {
    if (!isLoading) {
      if (isAuthenticated) {
        router.push("/dashboard");
      } else {
        router.push("/login");
      }
    }
  }, [isAuthenticated, isLoading, router]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <html lang="en">
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
