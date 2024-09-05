"use client";

import { useForm } from "react-hook-form";
import { useTask } from "@/app/context/task";

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
    reset();
    setOpen(false);
  });

  return (
    <div className="absolute top-[15%] left-[250px] z-50 bg-blue-600 rounded-xl min-h-[500px] w-[300px]">
      <form
        onSubmit={onSubmit}
        className="flex flex-col gap-8 px-4 py-4 h-full"
      >
        <div className="flex flex-col gap-4">
          <label className="text-white font-semibold text-base" htmlFor="title">
            Title
          </label>
          <input
            className="bg-white rounded-xl px-2 py-2 focus:outline-none text-sm text-black"
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
          <label
            className="text-white font-semibold text-base"
            htmlFor="description"
          >
            Description
          </label>
          <textarea
            className="bg-white resize-none rounded-xl px-2 py-2 focus:outline-none text-sm text-black"
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
        <button className="bg-zinc-900 px-4 py-2 rounded-xl text-white font-semibold mt-64">
          Create Task
        </button>
      </form>
    </div>
  );
}
