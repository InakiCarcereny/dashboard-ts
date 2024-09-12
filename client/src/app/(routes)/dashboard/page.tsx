"use client";

import { FirstSection } from "./components/firstSection/FirstSection.dashboard";
import { SecondSection } from "./components/secondSection/SecondSection.dashboard";

export default function Dashboard() {
  return (
    <div className="xl:flex gap-4 grid grid-cols-1">
      <FirstSection />

      <SecondSection />
    </div>
  );
}
