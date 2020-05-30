const express = require('express')
const router = express.Router()

// router.get('/auctions', (res, req) => {
//   res.send('auctions')
// })
router.get('/auctions', (req, res) =>
  res.json({
    hello: "hello World"
  })
)

module.exports = router
