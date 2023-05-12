const express=require('express');
const router=express.Router();
const User=require('../models/User.js');
const { json } = require('body-parser');
router.get("/", async(req,res)=>{
    try{
        const User=await User.find();
        res.json(User);
    }catch(err){
        res.json({message:err})
    }
});
router.post("/Login", async(req,res)=>{
    try{
        const nd=await User.findOne().where('email').equals(req.body.email).where('password').equals(req.body.password);
        console.log(nd);
        res.json(nd);
    }catch(err){
        res.json({message:err})
    }
});
router.post("/", async(req,res)=>{
    const nd=new User({
        name:req.body.name,
        email:req.body.email,
        password:req.body.password,
    });
    console.log(nd);
    try{
        const Usersave=await nd.save();
        res.json(Usersave);
    }catch(err){
        res.json({message:err})
    }
});
router.patch("/:email",async(req,res)=>{
    try{
        const changepassword=await User.updateOne(
            {email:req.params.email},
            {$set:{password:req.body.password}}
        );
        console.log(changepassword);
        res.json(changepassword);
    }catch(err){
        res.json({message:err})
    }
});
module.exports=router;