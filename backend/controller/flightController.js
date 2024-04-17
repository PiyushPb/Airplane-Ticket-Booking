import Flight from "../models/flightSchema.js";
import Airline from "../models/airlineSchema.js";

// Controller to add a new airline

export const getFlights = async (req, res) => {
  const { from, to, departDate, arriveDate } = req.body;

  try {
    // Find flights based on the provided criteria
    const flights = await Flight.find({
      from: from,
      to: to,
      departDate: departDate,
    });

    if (flights.length === 0) {
      return res
        .status(404)
        .json({ status: false, message: "No flights found" });
    }

    // Populate the 'airline' field with the corresponding airline data
    const flightsWithAirlineInfo = await Promise.all(
      flights.map(async (flight) => {
        // Populate the 'airline' field with the corresponding airline data
        const populatedFlight = await Flight.populate(flight, {
          path: "airline",
        });
        // Here, the 'airline' field in 'populatedFlight' should already be populated with the airline data

        return {
          ...populatedFlight.toObject(), // Convert Mongoose document to plain JavaScript object
          airlineLogo: populatedFlight.airline.airlineLogo,
        };
      })
    );

    res.status(200).json(flightsWithAirlineInfo);
  } catch (error) {
    console.error("Error fetching flights:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const addAirline = async (req, res) => {
  const { airlineLogo, airlineName } = req.body;

  try {
    // Check if the airline with the given name already exists
    const existingAirline = await Airline.findOne({ airlineName });

    if (existingAirline) {
      return res.status(400).json({ message: "Airline already exists" });
    }

    // Create a new airline instance
    const newAirline = new Airline({
      airlineLogo,
      airlineName,
    });

    // Save the new airline to the database
    await newAirline.save();

    res.status(201).json("Airline added successfully");
  } catch (error) {
    console.error("Error adding airline:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const addFlight = async (req, res) => {
  const {
    from,
    to,
    departDate,
    arriveDate,
    departTime,
    arriveTime,
    airlineUid,
    price,
  } = req.body;

  try {
    // Find the airline document using the provided UID
    const airline = await Airline.findById(airlineUid);

    if (!airline) {
      return res.status(404).json({ message: "Airline not found" });
    }

    const newFlight = new Flight({
      airline: airline._id, // Use the _id of the airline document
      from,
      to,
      departDate,
      arriveDate,
      departTime,
      arriveTime,
      price,
    });

    await newFlight.save();

    res.status(201).json("Flight added successfully");
  } catch (error) {
    console.error("Error adding flight:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const getSingleFlight = async (req, res) => {
  const { id } = req.params;

  try {
    const flight = await Flight.findById(id).populate("airline");

    if (!flight) {
      return res
        .status(404)
        .json({ status: false, message: "Flight not found" });
    }

    const flightWithAirlineInfo = {
      ...flight.toObject(),
      airlineLogo: flight.airline.airlineLogo,
    };

    res.status(200).json(flightWithAirlineInfo);
  } catch (error) {
    console.error("Error fetching flight:", error);
    res.status(500).json({ status: false, message: "Internal server error" });
  }
};

export const getAllAirlines = (req, res) => {
  Airline.find({})
    .then((airlines) => {
      res.status(200).json(airlines);
    })
    .catch((error) => {
      console.error("Error fetching airlines:", error);
      res.status(500).json({ message: "Internal server error" });
    });
};
