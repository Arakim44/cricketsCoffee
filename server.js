// server.js

// set up ======================================================================
// get all the tools we need
var express  = require('express');
// var session  = require('express-session');
// var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var methodOverride = require("method-override");
var exphbs = require("express-handlebars");

// var passport = require('passport');
// var flash    = require('connect-flash');
var expressValidator = require('express-validator');

var PORT     = process.env.PORT || 8080;
var app      = express();
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
app.get('/',function(req,res){
    res.render('home');
});




 
// launch ======================================================================
  app.listen(PORT, function() {
    console.log("The magic happens on PORT " + PORT);
  });
 