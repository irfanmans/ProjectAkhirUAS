const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const PORT = 3000;

const routAuth = require("./routes/auth");
const routProduk = require("./routes/list-produk");

const app = express();
app.use(cors());
app.use(routAuth);
app.use(routProduk);

app.get("/", (req, res) => {
  res.send("Welcome to the system!");
});

app.listen(PORT, () => {
  console.log("Server is running on port 3000");
});
