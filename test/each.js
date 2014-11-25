var assert = require("assert");
var colors = require("colors");

var each = function (arr, action){
  // loop through and run action on
  //  item in the arr
  if(arr.length === 0){
    return "array doesn't have any elements";
  } else if (action === "string") {
    for(var i = 0; i < arr.length; i++){
      arr[i] = changeToString(i);
    }
    return arr;
  } else if (action === undefined) {
    return "You did not specify an action, please come again";
  } 
};

var changeToString = function(x){
  return x.toString();
};

var myArray = [1,2,3];
each(myArray, "string");
// Write a test for a function called 'each' that loops over an array and
// returns the array.
assert.equal(each(myArray, "string").toString(), "0,1,2", "equal() is not working");
assert.equal(each(myArray), "You did not specify an action, please come again", "checking if they entered appropriate action is not working");

// Then write the method that will make that test pass.

console.log("each() is working".cyan)



