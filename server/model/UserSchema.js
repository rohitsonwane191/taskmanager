import mongoose from "mongoose";
const userschema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },
    work:{
        type:String,
        required:true
    },
    dsc:{
        type:String,
        required:true
    },
    mobail:{
        type:Number,
        required:true
    }
})
const users= new mongoose.model("userdata",userschema);
export default users;