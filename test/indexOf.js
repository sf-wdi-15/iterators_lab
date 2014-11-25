var assert = require("assert");
var colors = require("colors");
var testArr = [5, 6, 7, 8]; // had to move variable declaration to the top to get test2 to pass. when it was left below it kept failing.

var indexOf = function (arr, value) {
  // some code here to find the index of 
  //  value in the arr.
  // if the value isn't in the arr it 
  //  should return -1
  for(var i = 0; i < (arr.length)+1; i++){
    if (arr[i] === value){
      return i;
    } else if (arr[i] === undefined){
      return -1; 
    }
    }
  };

// Write assertions for a method called 'indexOf' that returns the index of
// a given element of an array.
assert.equal(indexOf(testArr, 6), 1, "indexOf() is not correctly returning the position of an element in the array.");
  // use the following testArr to write your assertions
  // var testArr = [5, 6, 7, 8]; // had to move variable declaration to the top to get test2 to pass. when it was left below it kept failing.

  // Write an assertion for `indexOf` that 
  //  checks it returns -1 if value isn't 
  //  in the array.
assert.equal(indexOf(testArr, 10), -1, "indexOf() is not returning -1 when the value is not found in array"); //


  // Write an assertion for `indexOf` that 
  //  checks it returns the index of a 
  //  value in the array
  // assert.equal()

console.log("IndexOf() is working!".cyan);