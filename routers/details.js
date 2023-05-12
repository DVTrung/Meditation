const express = require('express');
const router = express.Router();
const Detail = require('../models/Detail');
const Course=require("../models/Course");

router.get('/detail/:lesson', async (req, res) => {
  try {
    const details=await Detail.find().where('lesson').equals(req.params.lesson);
    res.json(details);
    }catch(err){
        console.log(err);
        res.json({message:err})
    }
});
module.exports = router;