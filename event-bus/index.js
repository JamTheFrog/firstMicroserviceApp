const express = require("express")
const bodyParser = require("body-parser")
const axios = require("axios")

const app = express()

app.use(bodyParser.json())

app.post("/events",  async (req, res) => {
    const events = req.body

    await axios.post("http://localhost:4002/events", events)

    res.send({ status: "OK" })
})

app.listen(4005, () => console.log("listening on 4005"))