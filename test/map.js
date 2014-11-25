var assert = require("assert");
var colors = require("colors");


// Write the method that will make the assertions pass.
var map = function(arr){
  var newArr = [];
  for(var i = 0; i < arr.length; i++){
    var newValue = arr[i] + 1;
    newArr[i] = newValue;
  }
  return newArr;
};

// began to write a callback function below, after I couldn't get to work, I went the brute force attack way.
// var addOneToElement = function(element){
//   element + 1;
// }

myArray = [1,2,3];
map(myArray);

// Write assertions for a method called 'map' that loops over an array
//  and returns the result of each operation in a new array.
assert.equal(map(myArray).toString(), "2,3,4", "map() is not returning correctly");

console.log("map() is working!".cyan)