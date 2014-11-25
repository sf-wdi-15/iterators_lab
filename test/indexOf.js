var assert = require("assert");
var colors = require("colors");


var indexOf = function (arr, value) {
  return arr.indexOf(value);
};

// Write assertions for a method called 'indexOf' that returns the index of
// a given element of an array.
  
  // use the following testArr to write your assertions
  var testArr = [5, 6, 7, 8];

  // Write an assertion for `indexOf` that 
  //  checks it returns -1 if value isn't 
  //  in the array.
  assert.equal(indexOf(testArr,10),-1,"That value is in the array".red);


  // Write an assertion for `indexOf` that 
  //  checks it returns the index of a 
  //  value in the array
  assert.equal(indexOf(testArr,6),1,"Not equal".red);

console.log("IndexOf is working!".cyan);