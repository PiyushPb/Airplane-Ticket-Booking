import mongoose from "mongoose";
const Schema = mongoose.Schema;

const bookingSchema = new Schema({
  flight: {
    type: Schema.Types.ObjectId,
    ref: "Flight",
    required: true,
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: "User",
    required: true,
  },
  seat: {
    type: String,
    required: true,
  },
  fName: {
    type: String,
    required: true,
  },
  lName: {
    type: String,
    required: true,
  },
  dob: {
    type: String,
    required: true,
  },
  passportNumber: {
    type: String,
    required: true,
  },
  state: {
    type: String,
    required: true,
  },
  phoneNumber: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  passportSizePhoto: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Booking", bookingSchema);
