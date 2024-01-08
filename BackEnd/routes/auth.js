const express = require("express");
const { createUser } = require("../controllers/userController");
const router = express.Router();
router.use(express.json());

router.post("/signup", createUser);

router.post("/login", (req, res) => {
  const userData = req.body;
  console.log(userData);
});

module.exports = router;
