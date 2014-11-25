var assert = require("assert");
var colors = require("colors");
var arr = [1,2,3];

var each = function (arr, action){
  // loop through and run action on
//for(arr,function(){
	//return arr[i]
//});

	//for(var i = 0 ; i<arr.length ; i++){
		//console.log(arr[i]);
	//}
	//return arr

	arr.forEach(callback);
	return arr

	function callback(element){
		console.log(element);
	}

  //  item in the arr
  
};
// Write a test for a function called 'each' that loops over an array and
// returns the array.

// Then write the method that will make that test pass.

console.log("Each is working".cyan)

//action is like a callback