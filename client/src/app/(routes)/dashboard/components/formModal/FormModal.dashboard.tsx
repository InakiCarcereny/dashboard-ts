"use client";

import { useForm } from "react-hook-form";
import { useTask } from "@/app/context/task";
import { toast } from "sonner";

type State = {
  setOpen: (value: boolean) => void;
};

type FormValues = {
  title: string;
  description: string;
  dueDate: string;
};

export function FormModal({ setOpen }: State) {
  const { register, handleSubmit, formState, reset } = useForm<FormValues>();

  const { errors } = formState;

  const { createTask } = useTask();

  const onSubmit = handleSubmit(async (data) => {
    createTask(data);
    toast.success("Task created successfully");
    reset();
    setOpen(false);
  });

  return (
    <div className="absolute top-[15%] left-[250px] z-50 bg-white rounded-[4px] border border-zinc-200 min-h-[400px] w-[300px]">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-8 px-4 py-4 w-full"
      >
        <div className="flex flex-col gap-4">
          <label className="text-black text-base" htmlFor="title">
            Title
          </label>
          <input
            className="rounded-[4px] px-2 py-2 focus:outline-none text-sm w-full border border-zinc-200 dark:bg-white dark:text-black"
            type="text"
            id="title"
            {...register("title", {
              required: "Title is required",
              minLength: {
                value: 3,
                message: "Title must be at least 3 characters",
              },
              maxLength: {
                value: 20,
                message: "Title must be at most 20 characters",
              },
            })}
          />

          {errors.title && (
            <span>
              <span className="text-red-500 text-sm font-medium">
                {errors.title.message}
              </span>
            </span>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label className="text-black text-base" htmlFor="description">
            Description
          </label>
          <textarea
            className="resize-none rounded-[4px] px-2 py-2 focus:outline-none text-sm w-full border border-zinc-200 dark:bg-white dark:text-black"
            id="description"
            rows={5}
            {...register("description", {
              required: "Description is required",
              minLength: {
                value: 3,
                message: "Description must be at least 3 characters",
              },
              maxLength: {
                value: 100,
                message: "Description must be at most 100 characters",
              },
            })}
          />

          {errors.description && (
            <span>
              <span className="text-red-500 text-sm font-medium">
                {errors.description.message}
              </span>
            </span>
          )}
        </div>
        <button className="bg-blue-600 px-4 py-2 hover:rounded-xl duration-200 text-white font-semibold mt-20">
          Create
        </button>
      </form>
    </div>
  );
}
