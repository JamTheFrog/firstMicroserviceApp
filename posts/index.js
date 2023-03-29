const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const cors = require('cors')
const { randomBytes } = require("crypto")

const posts = {};

app.use(bodyParser.json())
app.use(cors())

app.get('/posts', (req, res) => {
    res.send(posts)
});

app.post('/posts', (req, res) => {
    const id = randomBytes(4).toString("hex")
    const { title } = req.body

    posts[id] = {
        id, title
    }

    res.status(201).send(posts[id])
});

app.listen(4000, () => console.log("listening on 4000"))