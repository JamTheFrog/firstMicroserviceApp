const express = require("express")
const cors = require("cors")
const app = express()
const bodyParser = require("body-parser")

app.use(cors())
app.use(bodyParser.json())

const posts = {}

app.get('/posts', (req,res) => {
    res.send(posts)
})

app.post("/events", (req, res) => {

    const { type, data } = req.body

   if(type === "postCreated") {
            const {id, title} = data

             posts[id] = { id, title, comments: [] }
   }

   if(type === "commentModerated") {
    const { postId, commentId, content, status} = data
    

    if(status !== "disapproved") posts[postId].comments.push({commentId, content})


    }

    res.send({})
})

app.listen(4002, () => console.log("listening on 4002"))