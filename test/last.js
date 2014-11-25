var assert = require("assert");
var colors = require("colors");

var last = function (arr) {
  // return the last value in the arr
  // return undefined if arr.length is 0
  if (arr.length === 0) {
  	return undefined;
  }
  else {
  	return arr[arr.length-1];
  }
};

var sel = [1,2,3,4,5]

last(sel);

// Write assertions for a function called 'last' that returns the last element
// of an array.
console.log("Assert is working!")