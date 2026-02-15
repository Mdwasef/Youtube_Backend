
import mongoose, { Schema } from "mongoose";
import mongooseAggregatePaginate from "mongoose-aggregate-paginate-v2";

let videoSchema=new mongoose.Schema({
    videoFile:{
        type:String, // 3rd party url to get video
        required:true
    },
    
thumbnail:{
    type:String, // 3rd party url to get video
        required:true
},


title:{
    type:String, 
        required:true
},

description:{
    type:String, 
        required:true
},

duration:{
    type:Number, // 3rd party url to get duration
    required:true
},


views:{
type:Number,
default:0
},

isPublished:{
    type:Boolean,
    default:true
},


owner:{
    type:Schema.Types.ObjectId,
    ref:'User'
}

    
},{timestamps:true})


videoSchema.plugin(mongooseAggregatePaginate)


export const Video=mongoose.model("Video",videoSchema);