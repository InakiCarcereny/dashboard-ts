"use client";

import { TaskTable } from "./components/taskTable/TaskTable.tasks";

export default function Tasks({ searchParams }: { searchParams: string }) {
  const query = searchParams?.query || "";

  return (
    <div className="w-full h-full">
      <TaskTable query={query} />
    </div>
  );
}
