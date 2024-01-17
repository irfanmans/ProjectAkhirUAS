const jwt = require("jsonwebtoken");
const jwtController = require("../controllers/jwtController.js")

function authenticateToken(req, res, next) {
  const token = req.headers.authorization;
    if (!token) {
      return res.status(401).json({success: false});
    }

    if (!token.startsWith("Bearer ")) {
      return res.status(401).json({ success: false, message: "Invalid token format" });
    }
    const actualToken = token.slice(7)
    const result = jwtController.verifyToken(actualToken);
  
    if (!result.success) {
      return res.status(403).json({ error: result.error });
    }
    req.user = result.data;
    next();
  }

module.exports = authenticateToken