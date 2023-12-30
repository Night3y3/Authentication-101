import { Router } from "express";
import {
  register,
  login,
  getUser,
  generateOTP,
  verifyOTP,
  createResetSession,
  resetPassword,
  updateUser,
} from "../controller/appController";

const router = Router();

// POST methods
router.route("/register").post(register); //register user
router
  .route("/registerMail")
  .post((req, res) => res.json("Register mail route")); //send a mail to user for registration
router
  .route("/authenticate")
  .post((req, res) => res.json("Authenticate route")); //authenticate user
router.route("/login").post(login); //login user

// GET methods
router.route("/user/:username").get(getUser); //get user by username
router.route("/generateOTP").get(generateOTP); //generate random OTP for user
router.route("/verifyOTP").get(verifyOTP); //verify OTP for user
router.route("/createResetSession").get(createResetSession); //reset all the variables for user

// PUT methods
router.route("/resetPassword").put(resetPassword); //reset password for user
router.route("/updateUser").put(updateUser); //update user details

// DELETE methods

export default router;
