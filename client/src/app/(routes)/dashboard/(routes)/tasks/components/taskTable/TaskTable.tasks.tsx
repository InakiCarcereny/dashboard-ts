import { useTask } from "@/app/context/task";
import { Ballpen } from "@/app/icons/ballpen";
import { Trash } from "@/app/icons/trash";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export function TaskTable() {
  const { tasks, deleteTask } = useTask();

  return (
    <Table>
      <TableHeader>
        <TableRow className="w-full border-none">
          <TableHead className="w-[400px] font-semibold text-blue-600 text-xl">
            Tittle
          </TableHead>
          <TableHead className="w-[400px] font-semibold text-blue-600 text-xl">
            Description
          </TableHead>
          <TableHead className="w-[400px] font-semibold text-blue-600 text-xl">
            Date
          </TableHead>
          <TableHead className="w-[400px] font-semibold text-blue-600 text-xl">
            Actions
          </TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {tasks.map((task) => (
          <TableRow
            key={task._id}
            className="font-semibold hover:bg-zinc-300 dark:hover:bg-zinc-700/40 border-none"
          >
            <TableCell>{task.title}</TableCell>
            <TableCell>{task.description}</TableCell>
            <TableCell>{task.dueDate}</TableCell>
            <TableCell className="flex items-center gap-2">
              <button className="px-2 py-2 rounded-full cursor-pointer">
                <Ballpen />
              </button>
              <button
                onClick={() => deleteTask(task)}
                className="px-2 py-2 rounded-full cursor-pointer"
              >
                <Trash />
              </button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
}
