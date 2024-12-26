const mongoose = require('mongoose');
const {Env_Vars} = require("./envVars");



exports.connectDB = async () => {
    try{ 
        const MONGO = Env_Vars.MONGO_URI;
        const conn = await mongoose.connect(MONGO).then(() => {
            console.log("connected");
        });
    }
    catch(err){ 
        console.log("error : " + err.message);
        process.exit(1);
    }
}