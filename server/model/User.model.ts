import mongoose, { Document, Schema } from "mongoose";
import { RequiredTypeField } from "../types";

export interface User extends Document {
  firstName: string;
  lastName: string;
  address?: string;
  username: RequiredTypeField & { unique: [boolean, string] };
  password: RequiredTypeField & { unique: [boolean, string] };
  email: RequiredTypeField & { unique: [boolean, string] };
  phoneNumber: Number;
  profileImage?: string;
}

const userSchema = new Schema<User>({
  firstName: { type: String },
  lastName: { type: String },
  address: { type: String },
  username: {
    type: String,
    required: [true, "Please provide a username"],
    unique: [true, "Username already exists"],
  },
  password: {
    type: String,
    required: [true, "Please provide a password"],
    unique: false,
  },
  email: {
    type: String,
    required: [true, "Please provide an email"],
    unique: true,
  },
  phoneNumber: { type: Number },
  profileImage: { type: String },
});

export default mongoose.model("Users", userSchema);
