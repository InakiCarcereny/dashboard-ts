"use client";

import { useTask } from "@/app/context/task";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useRouter } from "next/navigation";

export default function Task({ params }: { params: any }) {
  const { getTask, updateTask } = useTask();
  const { register, handleSubmit, formState, setValue } = useForm<{
    title: string;
    description: string;
    dueDate: string;
    _id: string;
  }>();
  const router = useRouter();

  const { errors } = formState;

  const ID = params.id;

  useEffect(() => {
    async function loadTask() {
      if (ID) {
        const task = await getTask(ID);
        console.log(task);
        setValue("title", task.title);
        setValue("description", task.description);
      }
    }

    loadTask();
  }, []);

  const onSubmit = handleSubmit(async (data) => {
    updateTask(ID, data);
    router.push("/dashboard/tasks");
  });

  return (
    <form
      onSubmit={onSubmit}
      className="rounded-xl px-4 py-4 w-[300px] min-h-auto flex flex-col gap-4 border border-zinc-200"
    >
      <h3 className="text-3xl font-semibold">Edit task</h3>

      <div className="flex flex-col gap-2 mt-4">
        <label htmlFor="title" className="text-black text-base">
          Title
        </label>
        <input
          className="focus:outline-none rounded-[4px] px-2 py-2 w-full text-sm border border-zinc-200"
          type="text"
          id="title"
          {...register("title", {
            required: "Title is required",
          })}
        />

        {errors.title && (
          <span className="text-red-500 text-sm font-semibold">
            {errors.title.message}
          </span>
        )}
      </div>

      <div className="flex flex-col gap-2">
        <label htmlFor="description" className="text-black text-base">
          Description
        </label>
        <textarea
          className="resize-none rounded-[4px] px-2 py-2 focus:outline-none text-sm w-full border border-zinc-200"
          id="description"
          rows={5}
          {...register("description", {
            required: "Description is required",
          })}
        />

        {errors.description && (
          <span className="text-red-500 text-sm font-semibold">
            {errors.description.message}
          </span>
        )}
      </div>

      <button
        type="submit"
        className="bg-blue-600 px-4 py-2 hover:rounded-xl duration-200 text-white font-semibold mt-6"
      >
        Save
      </button>
    </form>
  );
}
