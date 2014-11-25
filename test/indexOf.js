var assert = require("assert");
var colors = require("colors");


var indexOf = function (arr, value) {
  // some code here to find the index of 
  //  value in the arr.
  // if the value isn't in the arr it 
  //  should return -1
return arr.indexOf(value);

};

// Write assertions for a method called 'indexOf' that returns the index of
// a given element of an array.

  assert.equal((indexOf(testArr,5)("working").cyan);

  // use the following testArr to write your assertions
  var testArr = [5, 6, 7, 8];

  var indexOf = function (arr,value) {
    for (var i = 0; i < arr.length)+1; i++) {
       if (arr[i] === value) {
         return [i];
        } 
       else if (arr[i] === undefined) {
        }
   }
  };

  // Write an assertion for `indexOf` that 
  //  checks it returns -1 if value isn't 
  //  in the array.
  assert.equal((indexOf(testArr, 9), -1,("not working").red);


  // Write an assertion for `indexOf` that 
  //  checks it returns the index of a 
  //  value in the array
  assert.equal((testArr, 5), 1,("working").cyan);

console.log("IndexOf is working!".cyan)