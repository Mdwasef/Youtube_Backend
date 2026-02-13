import mongoose from "mongoose";

import { DB_NAME } from "../constants.js";

const connectDB = async ()=>{

try {
    
const connect = await mongoose.connect(`${process.env.MONGODB_URL}/${DB_NAME}`)

console.log(`MongoDB connection is ready ${connect.connection.host} on port ${process.env.PORT}`)


} catch (error) {
    console.error("ERROR FROM CONNECT.JS FILE :  ",error);
    process.exit(1);
}

}

export default connectDB;