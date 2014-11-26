var assert = require("assert");
var colors = require("colors");

var last = function (arr) {
	return arr[arr.length-1];
  // return the last value in the arr
  // return undefined if arr.length is 0
};

testArray = [1,2,4,6];
// Write assertions for a function called 'last' that returns the last element
// of an array.
assert.equal(last(testArray),6,("returns 6 for [" + testArray + "]").red);


console.log("Assert is working!")