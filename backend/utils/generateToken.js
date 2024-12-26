const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
const {env_vars} = require("./../config/envVars");

dotenv.config();


exports.generatetokenandsetcookie = async (user , res) => {
    const JWT = process.env.JWT_SECRET;
    const token = jwt.sign({user}, JWT ,{expiresIn : '1d'});
    res.cookie("jwt", token, {
        httpOnly: true,
        secure: true,
        sameSite: "strict",
        maxAge: 24 * 60 * 60 * 1000,
    });
    console.log("token generated and returned successfully : " , token);

    return token;
}