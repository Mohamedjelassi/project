const mongoose = require("mongoose");

// const config = require("config");
 require('dotenv').config({path: "./config/.env"})



const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
    });
    console.log("mongoose connected");  
  } catch (error) {
    console.log('error database1');
    
    console.log(error); 
  }
};

module.exports = connectDB;