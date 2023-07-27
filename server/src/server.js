const app = require('./app');
const dotenv=require('dotenv');
const connectDB = require('./config/db');
const port = process.env.PORT

//config env;
dotenv.config();


 //connect db;
 connectDB();


//  server listen;

app.listen(port,()=>{
    console.log(`server is running on port ${port}`);
})
