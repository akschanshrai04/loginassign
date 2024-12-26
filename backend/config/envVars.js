const dotenv = require("dotenv");

dotenv.config();

console.log("env PORT : ", process.env.PORT);



exports.Env_Vars = {
    PORT: process.env.PORT,
    MONGO_URI: process.env.MONGO_URI,
    JWT_SECRET : process.env.JWT_SECRET,
    NODE_ENV : process.env.NODE_ENV
};

console.log("env jwt : ", process.env.JWT_SECRET);
