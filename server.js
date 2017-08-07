var express         = require("express");
var app             = express();
var methodOverride  = require("method-override");
var bodyParser      = require("body-parser");
app.use(bodyParser.urlencoded({extended:true}));
app.use(methodOverride("_method"));
app.use(express.static(__dirname + "/public"))

app.get("/", function(req,res){
  console.log("This worked!")
  res.render('<p>Hello</p>')
})

app.listen(8080, process.env.IP || "0.0.0.0", function(){
  console.log(process.env.IP)
  console.log("this thing worked");
});
