const mongoose = require('mongoose');
const dotenv=require('dotenv');

dotenv.config();

const connectDB = ()=>{
    try{
        const url = process.env.URI
        const conn = mongoose.connect(url,{
            useUnifiedTopology:true,
            useNewUrlParser: true,
        })
        console.log("database connected successfully")
    }
catch (error) {
    console.log(`error: ${error.message}`);
}
}

module.exports=connectDB;