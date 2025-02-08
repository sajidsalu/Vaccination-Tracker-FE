import { z } from "zod";

export const loginSchema = z
  .object({
    email: z.string().nonempty("required").email("Invalid email address"),
    password: z
      .string()
      .nonempty("required")
      .min(6, "Password must be at least 6 characters"),
  })
  .required({ email: true, password: true });

export type LoginFormType = Zod.infer<typeof loginSchema>;
