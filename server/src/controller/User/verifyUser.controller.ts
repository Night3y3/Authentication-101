import { Request, Response } from "express";
import { TVerifyUserSchema } from "../../schema/User/verifyUser.schema";
import { findUserById } from "../../service/user.services";
import { responseType } from "../../../responseType";

export async function verifyUserHandler(
  req: Request<TVerifyUserSchema>,
  res: Response
) {
  const id = req.params.id;
  const verificationCode = req.params.verificationCode;

  // Find user by id
  const user = await findUserById(id);

  if (!user) {
    return res
      .status(responseType[404].httpstatus)
      .send(responseType[404].type);
  }

  // Check if user already verified
  if (user.verified) {
    return res
      .status(responseType[409].httpstatus)
      .send(responseType[409].message);
  }

  // Check if verification code is correct
  if (user.verificationCode === verificationCode) {
    // Update user to verified
    user.verified = true;
    await user.save();

    return res
      .status(responseType[200].httpstatus)
      .send(responseType[200].message);
  }

  // If verification code is incorrect
  return res
    .status(responseType[422].httpstatus)
    .send(responseType[422].message);
}
