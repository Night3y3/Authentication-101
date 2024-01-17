import express from "express";
import user from "./user.route";
import auth from "./auth.route";

const router = express.Router();

router.use("/api", user);

router.get("/health", (_, res) => {
  res.sendStatus(200);
});

export default router;
