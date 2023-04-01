const express = require("express")
const cors = require("cors")
const axios = require("axios")
const app = express()
const bodyParser = require("body-parser")

app.use(bodyParser.json())
app.use(cors())

app.post("/events", (req,res) => {
    const {type, data} = req.body
    if(type === "createdComment"){  
        const comment = data.content 
        console.log(comment)
    }
    res.send({})
})

app.listen(4004, () => console.log("listening on 4004"))