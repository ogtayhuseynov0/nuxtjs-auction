const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
// const Auction = require('../../models/Auction')
var schema = new mongoose.Schema({ name: 'string', size: 'string' });
var Tank = mongoose.model('Tank', schema);
router.post('/', (req, res) =>
{
  const test = new Tank({
    size: "Hello"
  })
  // console.log(test)
  test.save(function (err) {
    if (err) {
      console.log(err)
    }
    // saved!
    console.log('saved-------------------')
  });
}
)

module.exports = router
