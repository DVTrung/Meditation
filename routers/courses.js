const express=require('express');
const router=express.Router();
const Course=require("../models/Course");

router.get("/",async(req,res)=>{
    try{
        const courses=await Course.find();
        res.json(courses);
    }
    catch(err)
    {
        res.json({message:err})
    }
});

router.post("/",async(req,res)=>{
    const course=new Course({
        lesson:req.body.lesson,
        title:req.body.title,
        description:req.body.description,
        music:req.body.music,
        image:req.body.image
    });
    try{
        const coursesave=await course.save();
        res.json(coursesave);
    }catch(err){
        res.json({message:err})
    }
});
router.get("/course/:lesson", async(req,res)=>{
    try{
        const courses=await Course.find().where('lesson').equals(req.params.lesson);
        res.json(courses);
    }catch(err){
        console.log(err);
        res.json({message:err})
    }
});
module.exports=router;