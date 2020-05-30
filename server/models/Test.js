const mongoose = require('mongoose')

const testSchema = new mongoose.Schema({
  done: String
})

module.exports = mongoose.model('tests', testSchema)
