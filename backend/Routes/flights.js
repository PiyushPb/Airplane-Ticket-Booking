import express from "express";

import {
  getFlights,
  addAirline,
  addFlight,
  getSingleFlight,
} from "../controller/flightController.js";

import { authenticate, restrict } from "../auth/verifyToken.js";

const router = express.Router();

router.post("/search", getFlights);
router.post("/addAirline", addAirline);
router.post("/addFlight", addFlight);
router.get("/getSingleFlight/:id", authenticate, getSingleFlight);
export default router;
