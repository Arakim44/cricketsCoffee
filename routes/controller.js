var express = require("express");

var router = express.Router();
// var menu = require("../model/menu.json");

router.get("/",function(req,res){
    res.render('home');
});

router.get("/menu",function(req,res){
    res.render('menu');
});

router.get("/shop",function(req,res){
    res.render('shop');
});

router.get("/location",function(req,res){
    res.render('location');
});

router.get("/contact",function(req,res){
    res.render('contact');
});

router.get("/bakeShop",function(req,res){
    res.render('bake');
});


module.exports = router;