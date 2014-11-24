# Iterators Lab

To get setup you want to practice using assertions to test your iterators. We are going to write our code and tests in the `test/` folder.


Let's try runnig the `test/example.js` file

```
node test/example.js
"Example is working"
```


## Using Assertions To Test

If you look at the code in `test/example.js` then you will see the following:

```
var assert = require("assert");
var colors = require("colors");


// Write your code here
var person = {};
person.firstName = "Jane";
person.lastName = "Doe";
person.fullName = function () {
  return this.lastName + ", " + this.firstName;
};

// Write your assertions aferward
// check person.firstName is Jane
assert.equal(person.firstName, "Jane", "firstName should be 'Jane'".red);
// check person.lastName is Doe
assert.equal(person.lastName, "Doe", "lastName should be 'Doe'".red);
// check person.fullName returns "Doe, Jane"
assert.equal(person.fullName(), "Doe, Jane", "fullName should be 'Doe, Jane'".red);

console.log("Example is working!".cyan);

```

Try modifying the code in one of the asserts from `test/example.js`. For example let's change the last assertion to say `"Jane Doe"` instead of `"Doe, Jane"`.

```
...
assert.equal(person.fullName(), "Jane Doe", "fullName should be 'Doe, Jane'".red);
...

```

If you run the code using `node/example.js` then you'll get the following error

```
assert.js:92
  throw new assert.AssertionError({
        ^
AssertionError: fullName should be 'Doe, Jane'
    at Object.<anonymous> (/Users/delmerreed/Documents/GA_Work/wdi_sf_15/iterators/test/example.js:19:8)
    at Module._compile (module.js:456:26)
    at Object.Module._extensions..js (module.js:474:10)
    at Module.load (module.js:356:32)
    at Function.Module._load (module.js:312:12)
    at Function.Module.runMain (module.js:497:10)
    at startup (node.js:119:16)
    at node.js:906:3

```


Note how it says the following:

```
AssertionError: fullName should be 'Doe, Jane'
```

We can then use our `assert` statements to test if our example is behaving correctly, because if it isn't we get an error. If we have no errors then we make to final `console.log("Example is working!".cyan);`.



### More On Assert

Assert is method that is built into node to compare values. It can be used one of two ways. 

```
assert.equal(1,2)
```
The above way just throws an error because `1 == 2` doesn't return `true`. We can also say the following.

```
assert.equal(1,2, "custom message")
```
Now when the `assert.equal` fails to be true it will print our `"custom message"` string to remind us what we were trying to test.


## Directions

In this homework you'll be implementing some useful function that are commonly used in making web applications: `first`, `last`, `indexOf`, `last`, and of course, `each` and `map`.

Your job will be to use the `assert.equal` method to write assertions that test your function is working correctly. Each file can be run using

```
node test/some_file_name.js
```

Each file includes the following two helpful lines of code

```
var assert = require("assert");
var colors = require("colors");

```

This is helpful if you want to print out cool and colorful error messages to the console.
