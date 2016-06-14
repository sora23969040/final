var express   =     require("express");
var bodyParser  =    require("body-parser");
var app       =     express();
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/',function(req,res){
  res.sendfile("index.html");
});

app.post('/login',function(req,res){
  var user_name=req.body.user;
  var password=req.body.password;
  var word=req.body.text
  console.log("From Client pOST request: User name = "+user_name+" and password is "+password+",say,"+word);
  res.end("yes");
});


app.listen(5000,function(){
  console.log("Started on PORT 5000");
})
