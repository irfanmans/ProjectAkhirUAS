const express = require('express')
const app = express()
const routAuth = require('./routes/auth')
const routProduk = require('./routes/list-produk')

app.use(routAuth)
app.use(routProduk)

const cors = require("cors")
app.use(cors())

const PORT = 3000

app.get('/', (req,res) => {
    res.send('Welcome to the system!')
})

app.listen(PORT, () => {
    console.log('Server is running on port 3000')
})
