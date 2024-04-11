import express from "express";
import { authenticate, restrict } from "../auth/verifyToken.js";

import { getCheckoutSession } from "../controller/bookingController.js";

const router = express.Router();

router.post("/checkout-session/:flightId", authenticate, getCheckoutSession);
export default router;
