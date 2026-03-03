const express = require("express")
const cors = require("cors")

const app = express()
app.use(cors())
app.use(express.json())

app.use("/api/nakshatrax", require("./routes/astrology"))

const PORT = process.env.PORT || 5001
app.listen(PORT, () => console.log("Middleware running", PORT))