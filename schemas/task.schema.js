import { z } from "zod";

export const createTaskSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
    })
    .min(3, {
      message: "Title must be at least 3 characters",
    })
    .max(20, {
      message: "Title must be at most 20 characters",
    }),
  description: z
    .string({
      required_error: "Description is required",
    })
    .min(3, {
      message: "Description must be at least 3 characters",
    })
    .max(100, {
      message: "Description must be at most 100 characters",
    }),
  dueDate: z.date().optional(),
});

export const updateTaskSchema = z.object({
  title: z
    .string({
      required_error: "Title is required",
    })
    .min(3, {
      message: "Title must be at least 3 characters",
    })
    .max(20, {
      message: "Title must be at most 20 characters",
    }),
  description: z
    .string({
      required_error: "Description is required",
    })
    .min(3, {
      message: "Description must be at least 3 characters",
    })
    .max(100, {
      message: "Description must be at most 100 characters",
    }),
  dueDate: z.date().optional(),
});
