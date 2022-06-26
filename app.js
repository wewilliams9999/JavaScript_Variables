console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);

// Exercise 1
const firstName = "Wallis";
let lastName = "Williams";
var age = 36;

// Exercise 2
let fullName = firstName + " " + lastName; //concatenation

let templateFullName = `${firstName} ${lastName}`; //must use backticks for string interpolation in JavaScript - template literal

console.log("fullName: ", fullName);
console.log("templateFullName: ", templateFullName);

// Exercise 3
let city = "Nashville";
let pastime = "watching TV";

let myStory = `Hello, my name is ${fullName}.
I live in ${city}. I really love ${pastime}.`

console.log(myStory);