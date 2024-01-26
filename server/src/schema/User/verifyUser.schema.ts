import { object, TypeOf, string } from "zod";

export const verifyUserSchema = object({
  params: object({
    id: string(),
    verificationCode: string(),
  }),
});

export type TVerifyUserSchema = TypeOf<typeof verifyUserSchema>["params"];
