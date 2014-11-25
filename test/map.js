var assert = require("assert");
var colors = require("colors");


// Write the method that will make the assertions pass.
var map = function (arr, fn) {
	var result = [];
  	for(var i = 0; i<arr.length; i+=1) {
  		result.push(fn(arr[i]));
  	}
  	return result;
};

// Write assertions for a method called 'map' that loops over an array
//  and returns the result of each operation in a new array.
var testArr = [1, 2, 3, 4];

var iterate = function (value) {
  return value;
};

// Then write the method that will make that test pass.
assert.equal(map(testArr, iterate).toString(), testArr.toString(),  map(testArr, iterate));

console.log("Map is working!".cyan)