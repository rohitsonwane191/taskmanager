// import express from "express";
// import loginUsers from "../model/loginSchema.js";
// const loginRouter=express.Router();
// loginRouter.post("/reg",async(req,res)=>{
//     try {
//         const registerdata=loginUsers(req.body);
//         await registerdata.save();
//         res.status(200).json(registerdata);
//         console.log("register successful");
//     } catch (error) {
        
//         res.status(404).json(error);
//         console.log(error);
//     }
// })
// loginRouter.post("login",async(req,res)=>{
//     try {
//         const {email,password}=req.body;
//         const users= await loginUsers.findOne({email,password},);
//         if(!users){
//             res.status(404).json("user not found");
//         }
//         res.status(200).json(users);
//         console.log("users login successfully");

//     } catch (error) {
//         res.status(404).json(error);
//     }
// })
// export default loginRouter;
import express from "express";
const loginRouter = express.Router();
import loginUsers from "../model/loginSchema.js";
loginRouter.post("/login", async (req, res) => {
    try {
          const {email,password}=req.body;
       const user= await loginUsers.findOne({email,password});
if(!user){
    return res.status(404).send("user not found");
}
res.status(200).json(user);
    } catch (error) {
        res.status(404).send(error)
    }
})

// get userdata
loginRouter.post("/register", async (req, res) => {
    try {
        const adduser = new loginUsers(req.body)
        await adduser.save();
        res.status(201).json(adduser);
        console.log(adduser);
    
} catch (error) {
    res.status(404).send(error)
}
})

export default loginRouter
