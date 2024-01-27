import { object, TypeOf, string } from "zod";

export const forgotPasswordSchema = object({
  body: object({
    email: string({
      required_error: "Email is required",
      description: "This is a email of the user",
    }).email("Not a valid email"),
  }),
});

export type TForgotPasswordSchema = TypeOf<typeof forgotPasswordSchema>["body"];
