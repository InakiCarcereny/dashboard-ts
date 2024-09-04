"use client";

import { Dot } from "@/app/icons/dot";
import { Pin } from "@/app/icons/pin";
import { FirstSection } from "./components/firstSection/FirstSection.dashboard";
import { SecondSection } from "./components/secondSection/SecondSection.dashboard";

export default function Dashboard() {
  return (
    <div className="flex gap-4">
      <FirstSection />

      <SecondSection />
    </div>
  );
}
