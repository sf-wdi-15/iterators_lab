
var assert = require("assert");
var colors = require("colors");

// write the function that will make that test pass.
var testArr = [5, 6, 7, 8];

var first = function (arr) {
  if (arr.length === 0){
    return undefined;
  } else {
    return arr[arr.length-arr.length];
  }
};

/***********
or better yet 

var first = function (arr) {
  if(arr === []) {
    return undefined;
  } else {
    return arr[0];
  }
};
***********/
first(testArr);

// Make the following assertions pass
assert.equal(first(testArr), 5, "first() does not return the first value of array");
assert.equal(first([]), undefined, "first() is not returning undefined for empty array");

// Here's a cool way to make a long error message
//  that prints
// var msgOne = "first ".cyan + "should return".red + 
//             "undefined".cyan + "for empty array".red;
// assert.equal(first([]), undefined, msgOne)
// assert.equal(first(testArr), 5, ("returns 5 for [" + testArr + "]").red);

console.log("first() is working!".cyan)

  