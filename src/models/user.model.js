import mongoose, { Schema } from "mongoose";


import jwt from 'jsonwebtoken';

import bcrypt from 'bcrypt';


let userSchema= new mongoose.Schema({

username:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
    index:true
},

email:{
    type:String,
    required:true,
    unique:true,
    lowercase:true,
    trim:true,
},

fullname:{
    type:String,
    required:true,
    trim:true,
    index:true
},

avatar:{
    type:String, // we use cloudinary url .. we store url in 3rd party cloud service and use that url
    required:true,
},

coverImage:{
    type:String, // we use cloudinary url .. we store url in 3rd party cloud service and use that url
},

watchHistory:[{
    type:Schema.Types.ObjectId,
    ref:"Video"
}],

password:{
    type:String,
    required:[true,'Password is required']
},

refreshToken:{
    type:String
}

},{timestamps:true})


// encryption ...we have to use mongoose hooks
//


userSchema.pre("save", async function (err,req,res,next){


    // it checks if the password field is modifed or not .. if not modified then return to next().. if not then modify the password field 
    
if(!this.isModified("password")) return next();

    this.password=bcrypt.hash(this.password,10);
    next()
})

// method injects 


// used to check if password correct or not .. bcrypt can able to check if correct or not 

userSchema.methods.isPasswordCorrect=async function(password) {
   return await bcrypt.compare(password, this.password); // return true or false
}

userSchema.methods.generateAccessToken=function(){
  return  jwt.sign(
        {_id: this._id,
            email:this.email,
            username:this.username,
            fullname:this.fullname
        },
        process.env.ACCESS_TOKEN_SECRET,
        {
            expiresIn:process.env.ACCESS_TOKEN_EXPIRY
        }
    )
}

userSchema.methods.generateRefreshToken=function(){
return jwt.sign({
    _id:this._id
},
process.env.REFRESH_TOKEN,
{
    expiresIn: process.env.REFRESH_TOKEN_EXPIRY
}
)
}


export const User=mongoose.model('User',userSchema);