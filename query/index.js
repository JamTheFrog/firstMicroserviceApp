const express = require("express")
const cors = require("cors")
const app = express()

app.use(cors())

app.post("/events", (req, res) => {
    const eventType = req.body.type
    switch(eventType){
        case "postCreated":
            break;
        case "commentCreated":
            break;
        default:
            res.status(404)
            break;
    } 
})

app.listen(4002, () => console.log("listening on 4002"))