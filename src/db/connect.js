import mongoose from "mongoose";
import { DB_NAME } from "../constants.js";


const connectDB=async ()=>{

    try {
      const connectionInstance  =   await  mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`);
        console.log(`\n MongoDB Connected !! DB host: ${connectionInstance.connection.host} on port ${process.env.PORT}`)
    } catch (error) {
        console.error('MONGODB CONNECTION ERROR IN connection.js FILE ',error);
        process.exit(1);
    }
}


export default connectDB;