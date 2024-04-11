import Flight from "../models/flightSchema.js";
import Airline from "../models/airlineSchema.js";
import Booking from "../models/bookingSchema.js";
import Ticket from "../models/ticketSchema.js";

export const getTicket = async (req, res) => {
  const { uid } = req.params;

  try {
    const ticket = await Ticket.findOne({ uid });

    if (!ticket) {
      return res
        .status(404)
        .json({ success: false, message: "Ticket not found" });
    }

    // Fetch bookings associated with the ticket
    const bookings = await Booking.find({ _id: { $in: ticket.tickets } });

    const flightsData = {};

    // Process each booking and add flight information
    for (const booking of bookings) {
      const flightId = booking.flight;

      if (!flightsData[flightId]) {
        // Fetch flight data if not already fetched
        const flight = await Flight.findById(flightId);

        if (!flight) {
          console.error(`Flight with id ${flightId} not found`);
          continue; // Skip this iteration
        }

        const airline = await Airline.findById(flight.airline);

        // Add flight information to flightsData
        flightsData[flightId] = {
          ...flight.toObject(),
          airlineLogo: airline ? airline.airlineLogo : null,
          airlineName: airline ? airline.airlineName : null,
          bookings: [],
        };
      }

      // Convert booking to object and add to flight's bookings
      flightsData[flightId].bookings.push(booking.toObject());
    }

    // Convert flightsData object to array
    const flightsArray = Object.values(flightsData);

    res.status(200).json(flightsArray);
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};

export const getSingleTicketForVerification = async (req, res) => {
  const { id } = req.params;

  try {
    const booking = await Booking.findById(id);

    if (!booking) {
      return res
        .status(404)
        .json({ success: false, message: "Ticket not found" });
    }

    const flight = await Flight.findById(booking.flight);

    if (!flight) {
      return res
        .status(404)
        .json({ success: false, message: "Flight not found" });
    }

    const airline = await Airline.findById(flight.airline);

    if (!airline) {
      return res
        .status(404)
        .json({ success: false, message: "Airline not found" });
    }

    res.status(200).json({
      ...flight.toObject(),
      airlineLogo: airline.airlineLogo,
      airlineName: airline.airlineName,
      bookings: [booking.toObject()],
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({ success: false, message: "Server error" });
  }
};
