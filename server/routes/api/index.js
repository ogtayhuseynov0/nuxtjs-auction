const express = require('express')
const app = express()
const mongoose = require('mongoose')
const bodyParser = require('body-parser');
require('dotenv/config')
const router = express.Router()

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.json())
// connect db
mongoose.connect(process.env.MONGODB,
    { useUnifiedTopology: true },
    () => {
        console.log('connected to Db')
    })
    
    
app.get('/', (req, res) => res.send('best api'))
    
    
app.use(router)
const auctions = require('./auctions')
app.use('/auctions', auctions)


module.exports = app
