import mongoose from "mongoose";
const loginSchema= new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    password:{
        type:Number
    , required:true
    },
    mobail:{
        type:Number,
        required:true,   
    }
})
const loginUsers=new mongoose.model("logindata",loginSchema);
export default loginUsers;