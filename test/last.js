var assert = require("assert");
var colors = require("colors");

var last = function (arr) {
  // return the last value in the arr
  // return undefined if arr.length is 0
  return arr[arr.length - 1];
};

// Write assertions for a function called 'last' that returns the last element
// of an array.
var testArr = [5, 10, 20];
assert.equal(20, last(testArr), "last should return last element of array");
assert.equal(undefined, last([]), "last should return undefined for an empty array");
console.log("Assert is working!")