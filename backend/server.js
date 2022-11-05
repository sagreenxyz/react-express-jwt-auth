require('dotenv').config()

const express = require('express')
const app = express()

const PORT = process.env.PORT
const SERVER_URL = process.env.SERVER_URL

app.get('/', (req, res) => {
    res.send('GET /')
})

app.listen(PORT, () => {
    console.log(`Express server running at ${SERVER_URL}`)
})