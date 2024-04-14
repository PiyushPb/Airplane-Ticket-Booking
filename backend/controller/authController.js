import User from "../models/userSchema.js";
import Ticket from "../models/ticketSchema.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const jwtSecretKey =
  "f64b6790ba78cd243e0c5849dc5e7fd97c47e8f37234fe6403b1432a4a7705caadcc729936593a00939b3bd0e3554533961121715e4ffeac1b84cc10835a4d95";
const saltRounds = 10;

const createJWTToken = (payload) => {
  return jwt.sign(payload, jwtSecretKey, { expiresIn: "15d" });
};

export const registerUser = async (req, res) => {
  const { name, email, password } = req.body;

  if (!name || !email || !password) {
    return res
      .status(400)
      .json({ error: "Name, email, and password are required fields" });
  }

  const existingUser = await User.findOne({ email });

  if (existingUser) {
    return res.status(400).json({ error: "User already exists" });
  }

  try {
    const hashedPassword = await bcrypt.hash(password, saltRounds);

    const newUser = new User({
      name: name,
      email: email,
      password: hashedPassword,
    });

    await newUser.save();

    return res.status(200).json({ message: "User created successfully" });
  } catch (err) {
    return res.status(400).json("Something went wrong");
  }
};

export const loginUser = async (req, res) => {
  const { email, password } = req.body;

  if (!email || !password) {
    return res
      .status(400)
      .json({ error: "Email and password are required fields" });
  }

  try {
    const user = await User.findOne({ email });

    if (!user) {
      return res.status(404).json({ error: "Invalid email or password" });
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);

    if (!isPasswordValid) {
      return res.status(401).json({ error: "Invalid email or password" });
    }

    // Create payload with user ID and email
    const payload = {
      userId: user._id,
      email: user.email,
      isAdmin: user.isAdmin,
    };

    // Create JWT token
    const token = createJWTToken(payload);

    const userData = {
      _id: user._id,
      name: user.name,
      email: user.email,
      isAdmin: user.isAdmin,
      profilePic: user.profilePic,
    };

    return res
      .status(200)
      .json({ message: "Login successful", token, data: userData });
  } catch (error) {
    console.error("Login error:", error); // Add this line for logging
    return res.status(500).json({ error: "Something went wrong" });
  }
};

export const getUser = async (req, res) => {
  try {
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    const tickets = user.bookings;
    const ticketObjects = [];

    for (let i = 0; i < tickets.length; i++) {
      const ticket = await Ticket.findById(tickets[i]);
      ticketObjects.push(ticket); // Add each ticket to the array
    }

    return res.status(200).json({ user, tickets: ticketObjects }); // Include tickets array in the response
  } catch (error) {
    return res.status(500).json({ message: "Something went wrong" });
  }
};

export const updateProfile = async (req, res) => {
  const { name, profilePic } = req.body;

  try {
    // Find the user by ID
    const user = await User.findById(req.userId);

    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Update user's name if provided
    if (name) {
      user.name = name;
    }

    // Update user's profile picture if provided
    if (profilePic) {
      user.profilePic = profilePic;
    }

    // Save the updated user document
    await user.save();

    // Send a success response
    return res
      .status(200)
      .json({ message: "Profile updated successfully", user });
  } catch (error) {
    // Handle errors
    console.error("Profile update error:", error);
    return res.status(500).json({ message: "Something went wrong" });
  }
};
