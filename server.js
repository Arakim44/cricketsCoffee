// server.js

// set up ======================================================================
// get all the tools we need
var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");
var expressValidator = require('express-validator');
var PORT = process.env.PORT || 8080;
var app = express();
// var db = require("./model");


// configuration ===============================================================

app.use(express.static(__dirname + "/public"));

// set up our express application
app.use(methodOverride("_method"));
app.use(morgan('dev')); // log every request to the console
// app.use(cookieParser()); // read cookies (needed for auth)
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//set handlebars
app.engine("handlebars", exphbs({
  defaultLayout: "main"
}));
app.set("view engine", "handlebars");

// routing===================================================================
 var routes = require("./routes/controller.js")

app.use("/",routes);
app.use("/location",routes);
app.use("/bakeShop",routes)
app.use("/contact",routes);
app.use("/menu",routes);
app.use("/shop",routes);
 

// launch ======================================================================
app.listen(PORT, function () {
  console.log("The magic happens on PORT " + PORT);
});
