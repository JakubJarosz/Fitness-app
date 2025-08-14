const mongoose = require("mongoose");
const { User } = require("../models/user");
const { hashPassword, comparePassword } = require("../helpers/bcryptAuth");
const jwt = require("jsonwebtoken");

// TEST
const test = (req, res) => {
  res.json("test is working");
};

// REGISTER USER
const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;

    if (!name) return res.json({ error: "Name is required" });
    if (!password || password.length < 6)
      return res.json({
        error: "Password is required and should be at least 6 characters long",
      });

    const emailExist = await User.findOne({ email });
    if (emailExist) return res.json({ error: "Email is already taken" });

    const hashedPassword = await hashPassword(password);
    const user = await User.create({
      name,
      email,
      password: hashedPassword,
    });

    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server error" });
  }
};

// LOGIN USER
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) return res.json({ error: "No user found" });

    const passwordMatch = await comparePassword(password, user.password);
    if (!passwordMatch) return res.json({ error: "Incorrect password" });

    // Generate JWT
    const token = jwt.sign(
      { email: user.email, id: user._id, user: user.name },
      process.env.JWT_SECRET,
      { expiresIn: "1d" }
    );

    // Send cookie
    res
      .cookie("token", token, {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production", // true on Render
        sameSite: "none", // allow cross-origin
        maxAge: 1000 * 60 * 60 * 24, // 1 day
      })
      .json({
        message: "Login successful",
        user: {
          id: user._id,
          name: user.name,
          email: user.email,
        },
      });
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server error" });
  }
};

// GET PROFILE
const getProfile = async (req, res) => {
  try {
    const user = await User.findById(req.user.id);
    return res.json(user);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: "Server error" });
  }
};

// LOGOUT
const logOut = (req, res) => {
  res.clearCookie("token", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "none",
  });
  res.json({ message: "Logged out successfully" });
};

module.exports = {
  test,
  registerUser,
  loginUser,
  getProfile,
  logOut,
};