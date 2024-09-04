"use client";

import { useForm } from "react-hook-form";
import { useTask } from "@/app/context/task";

type FormValues = {
  title: string;
  description: string;
  dueDate: string;
};

export default function Tasks() {
  const { register, handleSubmit, formState } = useForm<FormValues>();

  const { errors } = formState;

  const { tasks, createTask } = useTask();

  const onSubmit = handleSubmit(async (data) => {
    createTask(data);
  });

  return (
    <div className="flex flex-col gap-4">
      <form onSubmit={onSubmit}>
        <label htmlFor="title">Title</label>
        <input
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
            <span className="text-red-500 text-sm font-semibold">
              {errors.title.message}
            </span>
          </span>
        )}

        <label htmlFor="description">Description</label>
        <input
          id="description"
          type="text"
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
            <span className="text-red-500 text-sm font-semibold">
              {errors.description.message}
            </span>
          </span>
        )}

        {/* <label htmlFor="dueDate">Due Date</label>
        <input id="dueDate" type="date" {...register("dueDate")} /> */}

        <button type="submit">Create Task</button>
      </form>

      {tasks.map((task) => {
        return (
          <div
            key={task._id}
            className="flex flex-col gap-1 bg-white text-black"
          >
            <span>{task.title}</span>
            <span>{task.description}</span>
            <span>{task.dueDate}</span>
          </div>
        );
      })}
    </div>
  );
}
