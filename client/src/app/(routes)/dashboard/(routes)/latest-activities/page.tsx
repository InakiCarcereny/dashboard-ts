import { Header } from "./components/header/Header.latest";
import { ActivitiesTable } from "./components/table/ActivitiesTable";

export default function LatestActivities({
  searchParams,
}: {
  searchParams: string;
}) {
  const query = searchParams?.query || "";
  return (
    <>
      <Header />

      <ActivitiesTable query={query} />
    </>
  );
}
