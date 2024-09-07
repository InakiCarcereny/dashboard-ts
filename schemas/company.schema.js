import { z } from "zod";

export const createAndUpdateCompanySchema = z.object({
  name: z
    .string({
      required_error: "Name is required",
    })
    .max(50, {
      message: "Name must be at most 50 characters",
    }),
  logo: z.any(),
  revenue: z.string({
    required_error: "Revenue is required",
  }),
  size: z.string({
    required_error: "Size is required",
  }),
  type: z.string({
    required_error: "Type is required",
  }),
  country: z.string({
    required_error: "Country is required",
  }),
});
