const express = require('express')
const cors = require("cors")
const { Sequelize, DataTypes } = require('sequelize');
const mysql = require("mysql2")

const PORT = 3000

const routAuth = require('./routes/auth')
const routProduk = require('./routes/list-produk')

const config = require('./config');
const sequelize = new Sequelize(config.development)

const app = express()
app.use(routAuth)
app.use(routProduk)
app.use(cors())


app.get('/', (req,res) => {
    res.send('Welcome to the system!')
})

app.listen(PORT, () => {
    console.log('Server is running on port 3000')
})
