import { z } from "zod";

export const signUpFormSchema = z.object({
  email: z
    .string()
    .email({ message: "please include @ symbol in your email" })
    .trim(),
  password: z
    .string()
    .min(8, { message: "Be at least 8 characters long" })
    .refine((value) => /[A-Z]/.test(value), {
      message: "Password must include at least one uppercase letter.",
    })
    .refine((value) => /[a-z]/.test(value), {
      message: "Password must include at least one lowercase letter.",
    })
    .refine((value) => /[\W_]/.test(value), {
      message: "Password must include at least one special symbol.",
    }),

  hobbies: z.string().trim(),
});
