const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
  const authHeader = req.headers.authorization;

  if (!authHeader) {
    res.status(401).json({ msg: "No Token Provided" });
    return;
  }

  const token = authHeader.split(" ")[1];

  jwt.verify(token, "rahasia", (err, user) => {
    if (err) {
      console.error(err);
      res.status(403).json({ msg: "Token Invalid" });
      return;
    }

    req.user = user;
    next();
  });
};
