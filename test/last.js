var assert = require("assert");
var colors = require("colors");

var last = function (arr) {
  // return the last value in the arr
  // return undefined if arr.length is 0
  if (arr.length === 0){
    return undefined;
  } else {
    // return arr.pop().toString();
    return arr[arr.length-1];
  }
};

var myArr = [1,2,3];
last(myArr);

// Write assertions for a function called 'last' that returns the last element
// of an array.
assert.equal(last(myArr), 3, "not working");
console.log("last() is working!".cyan);