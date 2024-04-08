import express from "express";

import { getTicket } from "../controller/ticketController.js";

import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.get("/getTicket/:uid", getTicket);
export default router;
