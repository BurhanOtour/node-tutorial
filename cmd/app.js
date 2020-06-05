var x = 10;
var y = 25;

console.log(x*y);

// The require() executes the JS file allowing us to return an "object" and cache it here (dependacny management)
var msgs = require("./msgs.js");
console.log(msgs);

var myFunction = require("./ourfunction.js");

var functionObject = require("./object");
console.log(myFunction());

console.log(functionObject);
// It will look for a logger.js file. If it couldn't find it, it looks for a folder logger.
// By default, it looks for an index.js file 
// that is equavilant to var logger = require("./logger/index");

var logger = require("./logger");

logger.log("This is from the logger");

