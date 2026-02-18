import { async_Handler } from "../utils/async_handler.js";


const registerUser= async_Handler(
    async (req,res)=>{
   res.status(200).json({
        message:'ok'
    })
})


export {registerUser}