const express = require('express')
const router = express.Router()
router.use(express.json());

router.post('/signup', (req,res) => {
    const userData = req.body
    console.log(userData)
    res.send('untuk signup')
})

router.post('/login', (req,res) => {
    res.send('untuk login')
})

module.exports = router