import express from "express";
import validateResource from "../middleware/validateResource";
import { UserSchema } from "../schema/User/user.schema";
import { createUserHandler } from "../controller/User/createUser.controller";
import { verifyUserSchema } from "../schema/User/verifyUser.schema";
import { verifyUserHandler } from "../controller/User/verifyUser.controller";
import { forgotPasswordHandler } from "../controller/User/forgotPassword.controller";
import { forgotPasswordSchema } from "../schema/User/forgotPassword.schema";

const userRouter = express.Router();

userRouter.post("/users", validateResource(UserSchema), createUserHandler);

userRouter.post(
  "/users/verify/:id/:verificationCode",
  validateResource(verifyUserSchema),
  verifyUserHandler
);

userRouter.post(
  "/users/forgot-password",
  validateResource(forgotPasswordSchema),
  forgotPasswordHandler
);

export default userRouter;
