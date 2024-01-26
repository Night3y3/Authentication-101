import express from "express";
import validateResource from "../middleware/validateResource";
import { UserSchema } from "../schema/User/user.schema";
import { createUserHandler } from "../controller/User/createUser.controller";
import { verifyUserSchema } from "../schema/User/verifyUser.schema";
import { verifyUserHandler } from "../controller/User/verifyUser.controller";

const userRouter = express.Router();

userRouter.post("/user", validateResource(UserSchema), createUserHandler);

userRouter.post(
  "/user/verify/:id/:verificationCode",
  validateResource(verifyUserSchema),
  verifyUserHandler
);

export default userRouter;
