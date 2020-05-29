var express= require("express");
var app= express();
app.set("view engine","ejs");


app.get("/",function(req,res){
    res.render("landing");
});

app.get("/moreinfo",function(req,res){
    res.render("profile");
});
app.get("/edu",function(req,res){
    res.render("edu");
})

app.get("/exp",function(req,res){
    res.render("exp");
});
app.get("/pro",function(req,res){
    res.render("projects");
});
app.get("/lang",function(req,res){
    res.render("Lang");
})

app.get("/skills",function(req,res){
    res.render("skills");
});
app.get("/cert",function(req,res){
    res.render("cert");
});
app.get("/hobbies",function(req,res){
    res.render("hobbies");
});
app.get("/contact",function(req,res){
    res.render("contact");
});

const port= process.env.PORT || 3000

app.listen(port,process.env.IP);