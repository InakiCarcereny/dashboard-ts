"use client";

import { Poppins } from "next/font/google";
import { Header } from "./components/header/Header.dashboard";
import { Aside } from "./components/aside/Aside.dashboard";
import { useUser } from "@/app/context/user";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ThemeProvider } from "@/components/theme-provider";

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
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div
        className={`${poppins.className} min-h-[992px] bg-white dark:bg-zinc-900`}
      >
        <Header />

        <section className="flex gap-12 w-screen mt-6 px-4">
          <Aside />

          <main className="w-full rounded-xl">{children}</main>
        </section>
      </div>
    </ThemeProvider>
  );
}
