var assert = require("assert");
var colors = require("colors");


var indexOf = function (arr, value) {
  return arr.indexOf(value);

  // some code here to find the index of 
  //  value in the arr.
  // if the value isn't in the arr it 
  //  should return -1
};

// Write assertions for a method called 'indexOf' that returns the index of
// a given element of an array.
  
  // use the following testArr to write your assertions
  var testArr = [5, 6, 7, 8];

  // Write an assertion for `indexOf` that 
  //  checks it returns -1 if value isn't 
  //  in the array.
  assert.equal(indexOf(testArr, 10), -1, "Value not in array".blue);


  // Write an assertion for `indexOf` that 
  //  checks it returns the index of a 
  //  value in the array
  assert.equal(indexOf(testArr, 6), 1, "Value is in array".red);

console.log("IndexOf is working!".cyan);