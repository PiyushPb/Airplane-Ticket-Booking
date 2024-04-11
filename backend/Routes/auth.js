import express from "express";
import { authenticate, restrict } from "../auth/verifyToken.js";

import {
  registerUser,
  loginUser,
  getUser,
} from "../controller/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", authenticate, getUser);

export default router;
