import express from "express";
import cors from "cors";
import "dotenv/config.js"
import confingDB from "./confingDB/confingDB.js";
import router from "./Router/router.js";
import loginRouter from "./Router/usreRouter.js";
const app=express();
const port=3000;
app.use(express.json());
app.use(cors());
app.use(loginRouter)
app.use(router)
confingDB();
app.listen(port,()=>{
    console.log("server listen on port "+port);
})