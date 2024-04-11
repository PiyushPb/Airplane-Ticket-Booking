import mongoose from "mongoose";
const Schema = mongoose.Schema;

// Define the airline schema
const airlineSchema = new Schema({
  airlineLogo: {
    type: String,
    required: true,
  },
  airlineName: {
    type: String,
    required: true,
  },
});

export default mongoose.model("Airline", airlineSchema);
