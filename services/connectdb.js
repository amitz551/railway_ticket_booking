const mongoose = require("mongoose");
require("dotenv").config();
const uri = process.env.MONGO_URI;
const connectDB = async () => {
    try{
        // const conn = await mongoose.connect("YOUR URL");
        const conn = await mongoose.connect(uri);
        console.log(`Connected to Mongodb Database!`);
    }
    catch(err){
        console.log (`Error in Mongodb ${err}`);
    }
}
module.exports = connectDB;