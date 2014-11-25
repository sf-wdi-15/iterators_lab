var assert = require("assert");
var colors = require("colors");


// Write the method that will make the assertions pass.

// Write assertions for a method called 'map' that loops over an array
//  and returns the result of each operation in a new array.
var dmap = function(arr, fn) {
  for_each(arr, function(el,id,ar) {
    ar[id] = fn(el);
  });
  return arr;
};

var for_each = function(arr, fn) {
  for(var i = 0; i<arr.length; i++) {
    fn(arr[i], i, arr);
  };
};

var nums = [1,2,3,4,5];

for_each(nums, function(el,id,ar) {
  console.log(ar);
  ar[id] = el + 5;
  console.log(ar);
});

var myarr = [1,2,3];
dmap(myarr, function(x) { return x + 5; });
console.log(myarr);



console.log("Map is working!".cyan)