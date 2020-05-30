const express = require('express')
const router = express.Router()


router.get('/', (req, res) =>
  res.json({
    hello: "hello World"
  })
)

router.put('/', (req, res) =>{
    res.json(req.body)
})
router.post('/', (req, res) =>
  res.json(req.body)
)

module.exports = router
