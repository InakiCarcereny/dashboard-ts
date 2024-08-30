import { z } from "zod";

export const registerSchema = z.object({
  username: z
    .string({
      required_error: "Username is required",
    })
    .min(3, {
      message: "Username must be at least 3 characters",
    })
    .max(20, {
      message: "Username must be at most 20 characters",
    }),
  password: z
    .string({
      required_error: "Password is required",
    })
    .min(8, {
      message: "Password must be at least 8 characters",
    })
    .max(20, {
      message: "Password must be at most 20 characters",
    }),
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),
  lastname: z
    .string({
      required_error: "Lastname is required",
    })
    .max(20),
});

export const loginSchema = z.object({
  email: z
    .string({
      required_error: "Email is required",
    })
    .email(),
  password: z.string({
    required_error: "Password is required",
  }),
});
