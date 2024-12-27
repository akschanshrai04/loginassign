const User = require('./../models/usermodel');
const bcrypt = require('bcryptjs');
const { generatetokenandsetcookie } = require('../utils/generateToken');
const { TokenExpiredError } = require('jsonwebtoken');

exports.signup = async (req, res) => {
   try{
    const {email , password , username} = req.body;

    console.log("check : " , email , password , username);

    if(!email || !password || !username){
        return res.status(400).json({
            success : false ,
            message: "Please fill in all fields."
        });
    }

    const emailregex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
    if(!emailregex.test(email)){
        return res.status(400).json({
            success : false ,
            message: "Please enter a valid email address."
        });
    }

    if(password.length < 6){
        return res.status(400).json({
            success : false ,
            message: "Password must be at least 6 characters long."
        });
    }

    const existingusername = await User.findOne({username});
    if(existingusername){
        return res.status(400).json({
            success : false ,
            message: "Username already exists."
        });
    }

    const existinguseremail = await User.findOne({email});
    if(existinguseremail){
        return res.status(400).json({
            success : false ,
            message: "Email already exists."
        });
    }

    const salt = await bcrypt.genSalt(10);
    const hashedpassword = await bcrypt.hash(password, salt);

    const user = await User.create({
        name: username,
        email,
        password: hashedpassword,
    });


    await user.save();

    return res.status(201).json({
        success : true,
        message: "User created successfully.",    
        user
    });

    
   }
   catch(err){
    console.log(err);
   }
}

exports.login = async (req, res) => {
    try {
        const {email , password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                success : false ,
                message: "Please fill in all fields."
            });
        }

        const user = await User.findOne({email});
        if(!user){
            return res.status(400).json({
                success : false ,
                message: "User does not exist."
            });
        }

        const isMatch = await bcrypt.compare(password, user.password);
        if(!isMatch){
            return res.status(400).json({
                success : false ,
                message: "Incorrect password."    
            });
        }
        
        generatetokenandsetcookie(user._id , res);

        res.status(200).json({    
            success : true,
            message: "Login successful.",
            user
        });
    } catch (error) {
        console.log(error);
        res.status(500).json({ success: false, message: "Internal server error" });
    }
}

exports.logout = async (req, res) => {
    try {
        res.clearCookie("jwt");
        return res.status(200).json({
            success : true,
            message: "Logout successful."
        });
    } catch (error) {
        console.log(error);
    }
}



exports.authCheck = async (req, res) => {
	try {
        console.log("req.user : " , req.user);
		res.status(200).json({ success: true, user: req.user });
	} catch (error) {
		console.log("Error in authCheck controller", error.message);
		res.status(500).json({ success: false, message: "Internal server error" });
	}
}
