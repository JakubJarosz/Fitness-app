const express = require("express");
const router = express.Router();
const cors = require("cors");
const {test} = require("../controllers/authControlles")


// middleware
router.use(
    cors({
        credentials: true,
        origin: "http://localhost:3001"
    })
)

router.get("/", test)

module.exports = router