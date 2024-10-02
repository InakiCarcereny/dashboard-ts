import { z } from "zod";

export const createEventSchema = z.object({
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
  dateInit: z.string({
    required_error: "Date init is required",
  }),
  hourInit: z.string({
    required_error: "Hour init is required",
  }),
  dateEnd: z.string({
    required_error: "Date end is required",
  }),
  hourEnd: z.string({
    required_error: "Hour end is required",
  }),
});
