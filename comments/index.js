const express = require("express")
const bodyParser = require("body-parser")
const { randomBytes } = require('crypto')
const cors = require('cors')
const app = express()
const axios = require("axios")

app.use(bodyParser.json())
app.use(cors())

const commentsByPostId = {}

app.get('/posts/:id/comments', (req,res) => {
    res.send(commentsByPostId[req.params.id] || [])
})

app.post('/posts/:id/comments', async (req,res) => {
    const commentId = randomBytes(4).toString("hex")
    const postId = req.params.id
    const {content} = req.body

    const comments = commentsByPostId[postId] || []

    

    comments.push({id: commentId, content: content})

    commentsByPostId[postId] = comments

    await axios.post("http://localhost:4005/events", {type:"createdComment", data:{ commentId, postId, content}})

    res.status(201).send(commentsByPostId)
})




app.listen(4001, () => console.log("server is listening at 4001"))