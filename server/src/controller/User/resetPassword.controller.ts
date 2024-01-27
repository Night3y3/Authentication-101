import { Request, Response } from "express";
import { TResetPasswordSchema } from "../../schema/User/resetPassword.schema";
import { findUserById } from "../../service/user.services";
import { responseType } from "../../../responseType";

export async function resetPasswordHandler(
  req: Request<
    TResetPasswordSchema["params"],
    {},
    TResetPasswordSchema["body"]
  >,
  res: Response
) {
  const { id, passwordResetCode } = req.params;
  const { password } = req.body;

  const user = await findUserById(id);

  if (
    !user ||
    !user.passwordResetCode ||
    user.passwordResetCode !== passwordResetCode
  ) {
    return res
      .status(responseType[400].httpstatus)
      .send(`${responseType[400].message} : User not found`);
  }

  user.passwordResetCode = null;
  user.password = password;
  await user.save();

  return res
    .status(responseType[200].httpstatus)
    .send(responseType[200].message);
}
