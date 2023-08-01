import express from "express";
const router=express.Router();
import users from "../model/UserSchema.js";
router.post("/save",async(req,res)=>{
    try {
        const userdata= users(req.body)
        await userdata.save();
        res.status(200).json(userdata);
        console.log("data saved");
    } catch (error) {
        res.status(404).json(error);
        console.log("data  not saved");
        
    }
    
})
router.get("/getdata",async(req,res)=>{
    try {
        const getdata=await users.find();
        res.status(200).json(getdata);
        console.log("getdata");
    } catch (error) {
        res.status(404).json(error);
        console.log(error);
    }
})
router.get("/getuser/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const getdata=await users.findById({_id:id});
        res.status(200).json(getdata);
        console.log(getdata);
    } catch (error) {
        res.status(404).json(error);
        
    }
})
router.put("/updateuser/:id",async(req,res)=>{
    try {
        const update = await users.findByIdAndUpdate(req.params.id,req.body);
        res.status(200).json(update);
        console.log(update);
    } catch (error) {
        res.status(404).json(error);
    }
})
router.delete("/deletedata/:id",async(req,res)=>{
    try {
        const {id}=req.params;
        const  deletedata= await users.deleteOne({_id:id});
        res.status(200).json(deletedata);
        console.log("data deleted");
    } catch (error) {
        res.status(404).json(error);
        
    }
})

export default router;