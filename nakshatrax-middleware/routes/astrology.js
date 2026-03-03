const express = require("express")
const { generateKundli } = require("../controllers/astrology")
const router = express.Router()

router.post("/kundli", generateKundli)

module.exports = router