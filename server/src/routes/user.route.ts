import express from "express";
import validateResource from "../middleware/validateResource";
import { UserSchema } from "../schema/User/user.schema";
import { createUserHandler } from "../controller/User/createUser.controller";
import { verifyUserSchema } from "../schema/User/verifyUser.schema";
import { verifyUserHandler } from "../controller/User/verifyUser.controller";
import { forgotPasswordHandler } from "../controller/User/forgotPassword.controller";
import { forgotPasswordSchema } from "../schema/User/forgotPassword.schema";
import { resetPasswordSchema } from "../schema/User/resetPassword.schema";
import { resetPasswordHandler } from "../controller/User/resetPassword.controller";

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

userRouter.post(
  "/users/resetpassword/:id/:passwordResetCode",
  validateResource(resetPasswordSchema),
  resetPasswordHandler
);

export default userRouter;
