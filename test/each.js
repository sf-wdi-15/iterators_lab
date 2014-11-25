var assert = require("assert");
var colors = require("colors");

var each = function (arr, action){
  var result = [];
  
  for(var i = 0; i<arr.length; i+=1) {
  result.push(action(arr[i]));
  }

  return result;
};

// Write a test for a function called 'each' that loops over an array and
// returns the array.
var testArr = [4, 5, 7];

var iterate = function (value) {
  return value;
};

// Then write the method that will make that test pass.
assert.equal(each(testArr, iterate).toString(), testArr.toString(), each(testArr, iterate));

console.log("Each is working".cyan)