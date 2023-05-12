const mongoose=require('mongoose');
const DetailSchema=mongoose.Schema(
    { 
        lesson:{
            type:Number,
            require:true
        },   
        description:String,
        image:String,
        duration:String,
        objectives:Array
    }
)
module.exports=mongoose.model("Detail", DetailSchema);