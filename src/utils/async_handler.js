const async_Handler=(requestHandler)=>{
(req,res,next)=>{
    Promise.resolve(requestHandler(req,res,next)).catch((error)=>next(error))
}
}



// const async_Handler=(fn)=>async (req,res,next,err)=>{
//     try{
//         await fn(req,res,next)
//     }
//     catch(err){
//         res.status(err.code||500).json({
//             success:false,
//             message:err.message
//         })
//     }
// }


export {async_Handler};