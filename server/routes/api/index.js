const express = require('express')
const app = express()
const router = express.Router()

app.get('/', (req, res) => res.send('Hello World!'))

app.use(router)

const auctions = require('./auctions')
app.use(auctions)

module.exports = app
