const User = require("../models/userModels.js");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

export const getUsers = async (req, res) => {
  try {
    const response = await User.findAll();
    res.status(200).json(response);
  } catch (err) {
    console.error(err);
  }
};

export const userLogin = async (req, res) => {
  try {
    const user = await User.findOne({
      where: {
        username: req.body.username,
      },
    });

    if (!user) {
      res.status(404);
      return;
    }

    const isValidPassowrd = await bcrypt.compare(
      req.body.password,
      user.password
    );
    if (!isValidPassowrd) {
      res.status(401);
      return;
    }

    const token = jwt.sign({ id: user.id }, "rahasia");
    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(400);
  }
};

export const userRegister = async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);
    await User.create({
      username: req.body.username,
      password: hashedPassword,
    });
    res.status(201).json({ msg: "User Created" });
  } catch (err) {
    console.error(err);
    res.status(500).json({ msg: "Error Creating User" });
  }
};
