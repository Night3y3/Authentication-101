import { Response, Request } from "express";
import { TForgotPasswordSchema } from "../../schema/User/forgotPassword.schema";
import { findUserByEmail } from "../../service/user.services";
import { responseType } from "../../../responseType";
import log from "../../utils/logger";
import { nanoid } from "nanoid";
import sendMail from "../../utils/mailer";

export async function forgotPasswordHandler(
  req: Request<{}, {}, TForgotPasswordSchema>,
  res: Response
) {
  const { email } = req.body;
  const message =
    "If an account with this email exists, an email has been sent to you with instructions on how to reset your password.";

  const user = await findUserByEmail(email);

  if (!user) {
    log.debug(`User not found with email ${email}`);
    return res.status(responseType[404].httpstatus).send(message);
  }

  if (!user.verified) {
    log.debug(`User not verified with email ${email}`);
    return res
      .status(responseType[401].httpstatus)
      .send(`${responseType[401].message} : User not verified`);
  }

  const passwordResetCode = nanoid();

  user.passwordResetCode = passwordResetCode;

  await user.save();

  await sendMail({
    from: "sabrex2107@gmail.com",
    to: user.email,
    subject: "Reset Password",
    text: `Password Reset code : ${passwordResetCode}. Identity : ${user._id}`,
  });

  log.debug(`Password reset code sent to ${email}`);

  return res.status(responseType[200].httpstatus).send(message);
}
