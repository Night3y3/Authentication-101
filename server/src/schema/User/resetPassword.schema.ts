import { object, TypeOf, string } from "zod";

export const resetPasswordSchema = object({
  params: object({
    id: string(),
    passwordResetCode: string(),
  }),
  body: object({
    password: string({
      required_error: "Password is required",
    })
      .min(6, "Password must be at least 6 characters long")
      .max(100, "Password must not exceed 100 characters"),
    confirmPassword: string({
      required_error: "Password confirm is required",
    })
      .min(6, "Password must be at least 6 characters long")
      .max(100, "Password must not exceed 100 characters"),
  }).refine((data) => data.password === data.confirmPassword, {
    message: "Passwords do not match",
    path: ["confirmPassword"],
  }),
});

export type TResetPasswordSchema = TypeOf<typeof resetPasswordSchema>;
