var express = require('express')
var router = express.Router();
var movies = require('.moduels/movies');
const { Mongoose } = require('mongoose');

router.get("/movies", async(req,res)=>{
    const imovie = await movies.find();
    res.send(imovie);
    console.log(imovie);
});
module.exports=router;

router.Post("/movies", async(req,res)=>{
    const imovie = new movie({
        name:req.body.name,
        rating:req.body.rating
    })
    await imovie.save((err,msg)=>{
        if(err){
            res.status(500,json({
                "error":err
            }))
        }
        else{
            res.status(200,json)({
                "massage":msg
            })
        }
    })
});