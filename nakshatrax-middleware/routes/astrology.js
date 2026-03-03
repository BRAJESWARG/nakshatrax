const express = require("express")
const router = express.Router()

const { generateKundli } = require("../controllers/astrology")

router.post("/kundli", generateKundli)
console.log(generateKundli)

module.exports = router