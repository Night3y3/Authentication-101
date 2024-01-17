import { prop } from "@typegoose/typegoose";
import { nanoid } from "nanoid";

export class User {
  @prop({ required: true, lowercase: true, unique: true })
  email: string;

  @prop({ required: true })
  username: string;

  @prop({ required: true })
  password: string;

  @prop({ required: true, default: () => nanoid() })
  verificationCode: string;

  @prop()
  passwordResetCode: string;

  @prop({ default: false })
  verified: boolean;
}
