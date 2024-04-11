import express from "express";

import {
  getTicket,
  getSingleTicketForVerification,
} from "../controller/ticketController.js";

import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/getTicket/:uid", getTicket);
router.get(
  "/getSingleFlightForVerification/:id",
  getSingleTicketForVerification
);

export default router;
