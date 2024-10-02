"use client";

import { useTask } from "@/app/context/task";
import { useEffect } from "react";
import { useForm } from "react-hook-form";

export default function Task({ params }: { params: any }) {
  const { getTask, updateTask } = useTask();
  const { register, handleSubmit, formState, setValue } = useForm<{
    title: string;
    description: string;
  }>();

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
    console.log(data);
  });

  return (
    <form
      onSubmit={onSubmit}
      className=" bg-zinc-300 rounded-lg px-4 py-2 w-[300px] h-[350px] flex flex-col gap-4"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="title" className="text-black font-semibold text-base">
          Title
        </label>
        <input
          className="bg-white focus:outline-none rounded-xl px-2 py-2 w-full text-sm"
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
        <label
          htmlFor="description"
          className="text-black font-semibold text-base"
        >
          Description
        </label>
        <textarea
          className="bg-white resize-none rounded-xl px-2 py-2 focus:outline-none text-sm w-full"
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
