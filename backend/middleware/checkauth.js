const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");

dotenv.config();


const verifyToken = async (req, res, next) => {
    try {
        // const token = req.cookies["jwt"];
        const authHeader = req.headers["jwt"];
        const token = authHeader && authHeader.split(" ")[1];
        console.log("Authorization header token:", token);
        console.log("inside checkauth : " , token)
        if (!token) {
            return res.status(401).json({ message: "Not authenticated" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        req.user = decoded;
        next();
        
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = verifyToken;
