const express = require('express')
const bodyParser = require('body-parser')

const { listen } = require('./src/bot')
const { port } = require('./config')

const app = express()

app.use(bodyParser.json())

app.post('/', listen)

app.listen(port)
