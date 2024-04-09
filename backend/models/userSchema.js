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
  profilePic: {
    type: String,
    default:
      "https://cdn.pixabay.com/photo/2018/11/13/21/43/avatar-3814049_1280.png",
  },
  bookings: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Ticket",
    },
  ],
});

export default mongoose.model("User", userSchema);
