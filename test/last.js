var assert = require("assert");
var colors = require("colors");
var testArr =  [1,2,3,4,5];

var last = function (arr) {
  // return the last value in the arr
  // return undefined if arr.length is 0
  return testArr[testArr.length-1];
};

// Write assertions for a function called 'last' that returns the last element
assert.equal(last(testArr),5,"the last value of this array is 5".red);
// of an array.
console.log("Assert is working!".cyan);