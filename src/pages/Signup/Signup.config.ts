import { z } from "zod";

export const signUpSchema = z.object({
  firstName: z.string().min(2, "First Name is required"),
  lastName: z.string().min(2, "Last Name is required"),
  email: z.string().email("Invalid email address").min(1, "Email is required"),
  password: z.string().min(6, "Password must be at least 6 characters long"),
});

export type SignUpFormType = z.infer<typeof signUpSchema>;
