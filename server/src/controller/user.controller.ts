import { Request, Response } from "express";
import { TUserSchema } from "../schema/user.schema";
import { createUser } from "../service/user.services";
import sendMail from "../utils/mailer";

export async function createUserHandler(
  req: Request<{}, {}, TUserSchema, {}, {}>,
  res: Response
) {
  const body = req.body;

  try {
    const user = await createUser(body);

    await sendMail({
      from: "sender@example.com",
      to: user.email,
      subject: "Verify your email",
      text: `Verification code : ${user.verificationCode}. Identity : ${user._id}`,
    });

    return res.send("User created successfully");
  } catch (error: any) {
    if (error.code === 11000) {
      return res.status(409).send("User already exists");
    }
    return res.status(500).send(`Something went wrong : ${error}`);
  }
}
