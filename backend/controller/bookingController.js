import Booking from "../models/bookingSchema.js";
import User from "../models/userSchema.js";
import Flight from "../models/flightSchema.js";
import Stripe from "stripe";
import Airline from "../models/airlineSchema.js";

export const getCheckoutSession = async (req, res) => {
  try {
    const user = await User.findById(req.userId);
    const flight = await Flight.findById(req.params.flightId).populate(
      "airline"
    ); // Populate the airline details

    const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

    const { bookingUsersData, selectedSeats } = req.body;

    // Generate a UID for the booking
    const bookingUID = generateUID();

    // Check if the user already has a booking with the same UID
    let bookingIndex = user.bookings.findIndex(
      (booking) => booking.uid === bookingUID
    );

    // If not, create a new booking object with the UID
    if (bookingIndex === -1) {
      user.bookings.push({ uid: bookingUID, tickets: [] });
      bookingIndex = user.bookings.length - 1;
    }

    // Determine the number of passengers
    const numPassengers = Object.keys(bookingUsersData).length;

    // Create checkout sessions for each passenger
    for (let i = 1; i <= numPassengers; i++) {
      const userData = bookingUsersData[`passenger${i}`];
      const seat = selectedSeats[i - 1]; // Assign seat based on passenger index

      // Create booking for the current passenger
      const booking = new Booking({
        flight: flight._id,
        user: user._id, // Assign booking to the logged-in user
        seat,
        fName: userData.firstName,
        lName: userData.lastName,
        dob: userData.dob,
        passportNumber: userData.passportNumber,
        state: userData.state,
        phoneNumber: userData.phoneNumber,
        email: userData.email,
      });

      // Save booking to the database
      const savedBooking = await booking.save();

      // Add the booking's ObjectID to the tickets array corresponding to the UID
      user.bookings[bookingIndex].tickets.push(savedBooking._id);
    }

    // Save the updated user object
    await user.save();

    // Update the flight database with booked seats
    flight.bookedSeats.push(...selectedSeats);
    await flight.save();

    // Create checkout session
    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      mode: "payment",
      success_url: `${process.env.CLIENT_SITE_URL}checkout-success`,
      cancel_url: `${process.env.CLIENT_SITE_URL}`,
      customer_email: user.email,
      client_reference_id: req.params.flightId,
      line_items: [
        {
          price_data: {
            currency: "inr",
            unit_amount: flight.price * 100, // Total price in cents
            product_data: {
              name: `${flight.airline.airlineName} - ${flight.from} to ${flight.to}`, // Concatenate airline name with flight details
              description: `Departure: ${flight.departDate} ${flight.departTime}, Arrival: ${flight.arriveDate} ${flight.arriveTime}`,
              images: [flight.airline.airlineLogo], // Use airline logo
            },
          },
          quantity: numPassengers,
        },
      ],
    });

    // Return success response with session
    res.status(200).json({
      success: true,
      message: "Stripe checkout session created",
      session,
    });
  } catch (error) {
    console.error("Error:", error); // Log any errors
    res.status(500).json({ success: false, message: error.message });
  }
};

// Function to generate a UID
function generateUID() {
  // Generate a random alphanumeric string
  const chars =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let uid = "";
  for (let i = 0; i < 10; i++) {
    uid += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return uid;
}
