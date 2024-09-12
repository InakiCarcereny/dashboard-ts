import { Earnings } from "../earnings/Earnings";
import { TaskNumber } from "../taskNumber/TaskNumber";
import { MonthResults } from "../monthResults/MonthResults";
import { PrevContacts } from "../prevContacts/PrevContacts";
import { Hour } from "../hour/Hour";
import { PrevActivities } from "../prevActivities/PrevActivities";
import { PrevCompanies } from "../prevCompanies/PrevCompanies.dashboard";

export function FirstSection() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row gap-4">
        <Earnings />
        <TaskNumber />
      </div>

      <MonthResults />
      <div className="flex flex-col sm:flex-col md:flex-col lg:flex-col xl:flex-row gap-4">
        <PrevContacts />
        <PrevActivities />
        <PrevCompanies />
        <Hour />
      </div>
    </div>
  );
}
