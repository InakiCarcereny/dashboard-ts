import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";

import { UserProvider } from "@/app/context/user";

const poppins = Poppins({ subsets: ["latin"], weight: ["400"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <UserProvider>{children}</UserProvider>
      </body>
    </html>
  );
}
