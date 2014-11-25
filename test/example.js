var assert = require("assert");
var colors = require("colors");


// Write your code here
var person = {};
person.firstName = "Jane";
person.lastName = "Doe";
person.fullName = function () {
  return this.firstName + " " + this.lastName;
};

// Write your assertions here.
// check person.firstName is Jane
assert.equal(person.firstName, "Jane", "firstName should be 'Jane'".red);
// check person.lastName is Doe
assert.equal(person.lastName, "Doe", "lastName should be 'Doe'".red);
// check person.fullName returns "Doe, Jane"
console.log(person.fullName());
assert.equal(person.fullName(), "Jane Doe", "fullName should be 'Jane Doe'".red);

console.log("Example is working!".cyan)
