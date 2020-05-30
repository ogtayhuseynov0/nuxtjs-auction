const mongoose = require('mongoose')

const AuctionSchema = mongoose.Schema({
    typeAuction: {
        required: true,
        type: Number
    },
    name: {
        required: true,
        type: String
    },
    initial: {
        required: true,
        type: Number
    },
    startDate: {
        type: Date,
        default: Date.now
    },
    daysToStay: {
        required: true,
        type: Number
    }
})

module.exports = mongoose.model('Auctions', AuctionSchema)