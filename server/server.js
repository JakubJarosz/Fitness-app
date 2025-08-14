const express = require("express");
require("dotenv").config();
const cors = require("cors");
const { mongoose } = require("mongoose");
const cookieParser = require("cookie-parser");

const app = express();

// DATABASE CONNECTION
mongoose.connect(process.env.MONGO_URL)
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Database not connected", err));


app.use(cors({
  credentials: true,
  origin: [
    "http://localhost:3000",          
    process.env.CLIENT_URL            
  ]
}));

// MIDDLEWARE
app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// ROUTES
app.use("/", require("./routes/authRoutes"));

// SERVER START
const port = process.env.PORT || 8000;
app.listen(port, () => console.log(`Server is running on port ${port}`));