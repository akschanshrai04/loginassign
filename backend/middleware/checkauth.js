const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const User = require("../models/usermodel");

dotenv.config();


const verifyToken = async (req, res, next) => {
    try {
        console.log(req.cookies);
        const token = req.cookies['jwt'];
        console.log("token : " , token);
        if (!token) {
            return res.status(401).json({ message: "Not authenticated" });
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET);

		if (!decoded) {
			return res.status(401).json({ success: false, message: "Unauthorized - Invalid Token" });
		}

		const user = await User.findById(decoded.userId).select("-password");

		if (!user) {
			return res.status(404).json({ success: false, message: "User not found" });
		}

        req.user = user;

        next();
        
    } catch (error) {
        console.log(error);
        return res.status(401).json({ message: "Invalid or expired token" });
    }
};

module.exports = verifyToken;
