import {
  DocumentType,
  Severity,
  getModelForClass,
  index,
  modelOptions,
  pre,
  prop,
} from "@typegoose/typegoose";
import argon2 from "argon2";
import { nanoid } from "nanoid";
import log from "../utils/logger";

@pre<User>("save", async function (next) {
  if (!this.isModified("password")) return;

  const hash = await argon2.hash(this.password);
  this.password = hash;

  return;
})
@index({ email: 1 })
@modelOptions({
  schemaOptions: {
    timestamps: true,
  },
  options: {
    allowMixed: Severity.ALLOW,
  },
})
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
  passwordResetCode: string | null;

  @prop({ default: false })
  verified: boolean;

  async validatePassword(this: DocumentType<User>, password: string) {
    try {
      return await argon2.verify(this.password, password);
    } catch (error) {
      log.error(error, " Error validating password");
      return false;
    }
  }
}

const UserModel = getModelForClass(User);
export default UserModel;
