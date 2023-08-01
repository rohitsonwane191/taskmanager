import mongoose from "mongoose";
import "dotenv/config.js"
 async function confingDB(){
try {
    await mongoose.connect(process.env.DB_URL);
    console.log("mongodb connected");
} catch (error) {
    console.log("mongodb  not  connected");
    
}
 }
 export default confingDB;