const express = require("express")
const cors = require("cors")
const axios = require("axios")
const app = express()
const bodyParser = require("body-parser")

const unwantedWords = ["orange"]

app.use(bodyParser.json())
app.use(cors())

app.post("/events", async (req,res) => {

    const {type, data} = req.body

    if(type === "createdComment"){  
        const comment = data.content 
        
    const hasUnwantedWords = comment.split(" ").some((word) => {
    return unwantedWords.includes(word.toLowerCase());
    });

    data.status = hasUnwantedWords ? "disapproved" : "approved";

    await axios.post("http://localhost:4005/events", {type: "commentModerated", data})
    }
    res.send({})
})

app.listen(4004, () => console.log("listening on 4004"))