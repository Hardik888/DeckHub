import {config} from "dotenv";
config();
import express, { Application,Request,Response } from "express";
import mongoose from "mongoose";

const app : Application = express();


mongoose.connect(process.env.MONGO_URL??
    " ")
.then(()=>{
    console.log("listening to port ");
    app.listen(process.env.PORT ?? " ");
}).catch(error=>{
    console.log(error)
})




app.get('/',(req: Request ,res:Response)=>{
    res.send("hello world");
    
});
