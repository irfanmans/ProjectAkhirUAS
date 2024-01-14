const jwt = require("jsonwebtoken");
const jwtController = require("../controllers/jwtController.js")

function authenticateToken(req, res, next) {
  const token = req.cookies.access_token;
    console.log(authHeader)
    if (!token) {
      return res.status(401);
    }
  
    const result = jwtController.verifyToken(token);
  
    if (!result.success) {
      res.clearCookie("access_token")
      return res.status(403).json({ error: result.error });
    }
  
    req.user = result.data;
    next();
  }

module.exports = authenticateToken