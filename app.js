const express=require("express");
const bodyParser=require("body-parser");
const date=require(__dirname+"/date")
const app=express();
let items=[];
let workItems=[];
app.use(bodyParser.urlencoded({extended: true}));
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.get("/",function(req,res){
let day=date.getDate();
res.render("list",{listTitle: day, newListItems:items}); 

});
 app.post("/",function(req,res){
  let item = req.body.newItem;

  if(req.body.List=="work"){
   workItems.push(item);
   res.redirect("/work");

  }
  else
  {
    items.push(item);
    res.redirect("/");
  }
 
 });
 app.get("/work",function(req,res){
  res.render("List",{listTitle:"Work List",newListItems:workItems});
 });
app.get("/about",function(req,res){
  res.render("about");
});
app.listen(3000,function(){
    console.log("server stared on port 3000");
});