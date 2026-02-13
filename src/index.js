// require('dotenv{{').config({path:'./env'})

import dotenv from 'dotenv';
// import mongoose from "mongoose";
// import { DB_NAME } from "./constants";
import connectDB from "./db/connect.js";

dotenv.config()

console.log(process.env.MONGODB_URL)



connectDB()

// import express from 'express';

// const app=express();

// ;( async ()=>{

// try{

// await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

// app.on("error",(error)=>{
//     console.log('ERROR',error);
//     throw error;
// })

// app.listen(process.env.PORT,()=>{
//     console.log(`App is running on port ${process.env.PORT}`);
// })
// }

// catch(error){
//     console.error("ERROR: ",error);
//     throw error;
// }

// })()                                                                                                                                                                                  

// const app= express();

// ( async ()=>{

//     try{
//     await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);

//         app.on("error",(error)=>{
//             throw error;
//         })

//         app.listen(process.env.PORT,()=>{
//             console.log(`db is connected successfully and run on port ${process.env.PORT}`)
//         })

//     }

//     catch(error){
//         console.error(error);
//     }
// })

// ()


