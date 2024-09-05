"use client";

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
