const express = require('express')
const router = express.Router()

router.post('/signup', (req,res) => {
    res.send('untuk signup')
})

router.post('/login', (req,res) => {
    res.send('untuk login')
})

module.exports = router