import express from "express";
import { authenticate, restrict } from "../auth/verifyToken.js";

import {
  registerUser,
  loginUser,
  getUser,
  updateProfile,
} from "../controller/authController.js";

const router = express.Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.get("/getUser", authenticate, getUser);
router.put("/updateUser", authenticate, updateProfile);

export default router;
