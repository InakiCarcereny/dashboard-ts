import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

import activities from "@/app/mocks/activities.json";

export function ActivitiesTable({ query }: { query: string }) {
  const filteredActivities = activities.filter((activity) =>
    activity.companyName.toLocaleLowerCase().includes(query)
  );
  return (
    <Table>
      <TableHeader>
        <TableRow className="w-full border-none">
          <TableHead className="w-[400px] font-semibold text-blue-600 text-base sm:text-xl">
            Tittle
          </TableHead>
          <TableHead className="w-[400px] font-semibold text-blue-600 text-base sm:text-xl">
            Description
          </TableHead>
          <TableHead className="w-[400px] font-semibold text-blue-600 text-base sm:text-xl">
            Date
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {filteredActivities.map((activity) => (
          <TableRow
            key={activity.companyName}
            className="font-semibold hover:bg-zinc-300 dark:hover:bg-zinc-700/40 border-none rounded-xl"
          >
            <TableCell>
              <div className="flex items-center gap-4">
                <img
                  className="h-12 w-12 rounded-xl"
                  src={activity.logo}
                  alt={activity.companyName}
                />
                <span>{activity.companyName}</span>
              </div>
            </TableCell>
            <TableCell>{activity.activity.description}</TableCell>
            <TableCell>{activity.activity.date}</TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
