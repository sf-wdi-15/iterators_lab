var assert = require("assert");
var colors = require("colors");


var indexOf = function (arr, value) {
  // some code here to find the index of 
  return arr.indexOf(value);

  };
  
// Write assertions for a method called 'indexOf' that returns the index of
//assert.equal(indexOf(testArr,8,)"working".red);
// a given element of an array.
// use the following testArr to write your assertions
var testArr = [5, 6, 7, 8];

// Write an assertion for `indexOf` that 
//  checks it returns -1 if value isn't 
//  in the array.
assert.equal(indexOf(testArr,4), -1,("the not in the array").red);


// Write an assertion for `indexOf` that 
//  checks it returns the index of a 
//  value in the array
assert.equal(indexOf(testArr,6), 1,("working").red);

console.log("IndexOf is working!".cyan);