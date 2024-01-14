const express = require("express");
const cors = require("cors");
const mysql = require("mysql2");

const routAuth = require("./routes/auth");
const routProduk = require("./routes/list-produk");
const database = require("./config/dataBase.js");
const tokenVerify = require("./middlewares/auth.js")

const PORT = process.env.PORT || 3000;
const app = express();

app.use(cors());
app.use(routAuth);
app.use(routProduk);
app.use(tokenVerify)

app.get("/", (req, res) => {
  res.send("Welcome to the system!");
});

// app.get("/dropAllDB", (req, res)=>{
//   const dropAllTables = async () => {
//       try {
//         await database.getQueryInterface().dropAllTables();
//         console.log('All tables dropped successfully.');
//         res.send("Successfully drop all table")
//       } catch (error) {
//         console.error('Error dropping tables:', error);
//       } finally {
//         // Close the Sequelize connection
//         await database.close();
//       }
//     };

//     dropAllTables()
// })
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


