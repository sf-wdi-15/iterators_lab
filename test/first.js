var assert = require("assert");
var colors = require("colors");

// write the function that will make that test pass.
var first = function (arr) {
	return arr[0];
};

// Make the following assertions pass
var testArr = [5, 6, 7, 8];

// Here's a cool way to make a long error message
//  that prints
var msgOne = "first ".cyan + "should return".red + 
            "undefined".cyan + "for empty array".red;
assert.equal(first([]), undefined, msgOne)
assert.equal(first(testArr), 5, ("returns 5 for [" + testArr + "]").red);


console.log("first is working!".cyan)
