const express = require("express");
const {Env_Vars} = require("./config/envVars");
const authroutes = require("./routes/authroutes");
const {connectDB} = require("./config/db");
const cookieParser = require("cookie-parser");
const cors = require("cors");


const app = express();


app.get("/", (req, res) => {
    res.send("Hello World");
})

app.use(cors({
    origin: "https://loginassign-1.onrender.com/", // Frontend URL
    credentials: true, // Allow cookies
}));


app.use(express.json());
app.use(cookieParser());


app.use("/api", authroutes);



const PORT = Env_Vars.PORT;
app.listen(PORT , () => {
    console.log(`Server is running on port ${PORT}`);
    connectDB();
});