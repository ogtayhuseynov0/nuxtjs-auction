const express = require('express')
const mongoose = require('mongoose')

const router = express.Router()
const Auction = require('../../models/Auction')

router.get('/', (req, res) =>
  res.json({
    hello: "Auction.find()"
  })
)

router.post('/', (req, res) =>
{
  // res.json(req.body.initial)
  const auc = new Auction({
    nameString: req.body.name,
    initial: req.body.initial,
    typeAuction: req.body.typeAuction,
    daysToStay: req.body.daysToStay
  })
  auc.save().then(data => {
    res.json(data)
  }).catch(err=> {
    res.json(err)
  })
  // res.json(req.body)
}
)

module.exports = router
