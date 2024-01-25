import express from "express";
import validateResource from "../middleware/validateResource";
import { UserSchema } from "../schema/user.schema";
import { createUserHandler } from "../controller/user.controller";

const router = express.Router();

router.post("/user", validateResource(UserSchema), createUserHandler);

export default router;
