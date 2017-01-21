var express = require("express");
var app = express();
var router = express.Router();
var path = __dirname + '/views/';

router.use(function (req,res,next) {
  console.log("/" + req.method);
  next();
});

router.get("/",function(req,res){
  res.sendFile(path + "Home.html");
});

router.get("/Food",function(req,res){
  res.sendFile(path + "Food.html");
});

router.get("/Serials",function(req,res){
  res.sendFile(path + "Serials.html");
});

router.get("/Books",function(req,res){
  res.sendFile(path + "Books.html");
});

router.get("/LifeEvents",function(req,res){
  res.sendFile(path + "LifeEvents.html");
});

router.get("/MilestonesofmyLife",function(req,res){
  res.sendFile(path + "MilestonesOfMyLife.html");
});

router.get("/MyCreativity",function(req,res){
  res.sendFile(path + "MyCreativity.html");
});

router.get("/FamilyAndFriends",function(req,res){
  res.sendFile(path + "FamilyAndFriends.html");
});

router.get("/MyPhotos",function(req,res){
  res.sendFile(path + "MyPhotos.html");
});

router.get("/TechnicalSkills",function(req,res){
  res.sendFile(path + "TechnicalSkills.html");
});
app.use("/",router);

app.use("*",function(req,res){
  res.sendFile(path + "404.html");
});

app.listen(3000,function(){
  console.log("Live at Port 3000");
});
