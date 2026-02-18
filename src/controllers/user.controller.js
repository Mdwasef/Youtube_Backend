import { async_Handler } from "../utils/async_handler.js";
import  {ApiError} from "../utils/APIError.js"
import {User} from "../models/user.model.js"
import {uploadOnCloudinary} from "../utils/cloudinary.js";
import { response } from "express";
import { ApiResponse } from "../utils/ApiResponse.js";

const registerUser= async_Handler(
    async (req,res)=>{

        console.log("HEADERS =>", req.headers["content-type"]);
        console.log("FILES =>", req.files);
        console.log("BODY =>", req.body);

  
        // get user details from frontend 
        // validation (if they sent all details correctly or not, empty or not)
        // check is user alrady exists or not : (username,email both)
        // check avatar and images (compulsary)
        // upload them in cloudinary, avatar
        // create user object - create entry in db
        // remove password and refreshtoken field from response
        // check for user creation 
        // if yes return user creation else return null


        //user details
        const {fullname,email,username,password}=req.body
        console.log("full name:",fullname,"email",email);
        
        // validation

        // if(fullname==""){
        //     throw new ApiError(400,"Fullname is required")
        // }

        if(
            [fullname,email,username,password].some((field)=>field?.trim()==="")
        ){
            throw new ApiError(400,"All fiekds are required")
        }


        // if user already exists or not 

     const existedUser =await User.findOne({
        $or:[
            {username},{email}
        ]
    })

if(existedUser){
    throw new ApiError(409,'User Already Exists')
}


// check if cover image already exist or not 

const avatarLocalPath=req.files?.avatar[0]?.path;
const coverImageLocalPath=req.files?.coverImage[0]?.path;


if(!avatarLocalPath)
    
{throw new ApiError(400,'Avatar is required')}


// upload in cloudinary 

const avatar=await uploadOnCloudinary(avatarLocalPath)

const coverImage=await uploadOnCloudinary(coverImageLocalPath)


if(!avatar){
    throw new ApiError(409,"Avatar is required")
}


// create obj and entry in db 


const user = await User.create({
    fullname,
    avatar:avatar.url,
    coverImage:coverImage?.url||"",
    email,
    password,
    username:username.toLowerCase()
})

// remove password and refreshtoken 
// check for user creation 

const createdUser=await User.findById(user._id).select(
    "-password -refreshToken"
);


if(!createdUser){
    throw new ApiError(500,"Something went wrong while registering user")
}

// return response

return res.status(201).json(
    new ApiResponse(200,createdUser,"user creation successfully")
)

})


export {registerUser}