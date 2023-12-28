import { Router } from "express";

const router = Router();

// POST methods
router.route("/register").post((req, res) => res.json("Register route"));
router
  .route("/registerMail")
  .post((req, res) => res.json("Register mail route"));
router
  .route("/authenticate")
  .post((req, res) => res.json("Authenticate route"));
router.route("/login").post((req, res) => res.json("Login route"));

// GET methods
router.route("/user/:username").get((req, res) => res.json("User route"));
router.route("/generateOTP").get((req, res) => res.json("Generate OTP route"));
router.route("/verifyOTP").get((req, res) => res.json("Verify OTP route"));
router
  .route("/createResetSession")
  .get((req, res) => res.json("Create reset session route"));

// PUT methods
router
  .route("/resetPassword")
  .put((req, res) => res.json("Reset password route"));
router.route("/updateUser").put((req, res) => res.json("Update user route"));

// DELETE methods

export default router;
