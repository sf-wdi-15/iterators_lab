var assert = require("assert");
var colors = require("colors");

var each = function (arr, action){
  // loop through and run action on
  //  item in the arr
  for (var index = 0; index < arr.length; index +=1 ) {
    action(arr[index], index, arr);
  }
};
// Write a test for a function called 'each' that loops over an array and
// returns the array.

// Then write the method that will make that test pass.
var testArr = [5, 6, 7];
var result = [];
each(testArr, function(element){
  result.push(element);
});

assert.deepEqual(testArr, result, "each should pass in the element in each iteration.");

result = [];
each(testArr, function(element, index){
  result.push(index);
});

assert.deepEqual([0, 1, 2], result, "each should pass in the element in each iteration.");


console.log("Each is working".cyan)