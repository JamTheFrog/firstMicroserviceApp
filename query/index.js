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

   if(type === "createdComment") {
    const { postId, commentId, content} = data

    posts[postId].comments.push({commentId, content})

    console.log(posts[postId].comments)
    }

    res.send({})
})

app.listen(4002, () => console.log("listening on 4002"))