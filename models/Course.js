const mongoose=require('mongoose');
const CourseSchema=mongoose.Schema(
    { 
        lesson:{
            type:Number,
            require:true
        },   
        title:String,
        description:String,
        music:String,
        image:String
    }
)
module.exports=mongoose.model("Course", CourseSchema);