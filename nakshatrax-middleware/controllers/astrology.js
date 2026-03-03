const axios = require("axios")

const generateKundli = async (req, res) => {
  try {
    const response = await axios.post(
      process.env.JAVA_BACKEND_URL || "http://localhost:8080/api/kundli",
      req.body
    )
    res.json(response.data)
  } catch (err) {
    console.error("Kundli generation failed:", err.message)
    res.status(500).json({ error: "Backend processing failed" })
  }
}

module.exports = { generateKundli }