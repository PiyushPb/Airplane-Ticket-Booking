import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  isAdmin: {
    type: Boolean,
    default: false,
  },
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
    }
  ],
});

export default mongoose.model("User", userSchema);
