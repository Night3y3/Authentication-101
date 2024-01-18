import { object, string, TypeOf } from "zod";

export const UserSchema = object({
  body: object({
    email: string({
      required_error: "Email is required",
    }).email("Not a valid email"),
    username: string({
      required_error: "Username is required",
    }).min(3, "Username must be at least 3 characters long"),
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

export type TUserSchema = TypeOf<typeof UserSchema>["body"];
