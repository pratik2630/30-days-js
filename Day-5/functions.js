// Day 5: Functions

// Tasks/Activities:

// Activity 1: Function Declaration

// • Task 1: Write a function to check if a number is even or odd and log the result to the console.
function oddEven(num) {
    if (num % 2 == 0) {
        console.log("It's even number")
    } else {
        console.log("It's odd number")
    }
    
}

oddEven(4)
console.log("======================================")
// Task 2: Write a function to calculate the square of a number and return the result.

function square(sqNum) {
    console.log("Sqare of number "+ sqNum +" is "+ sqNum*sqNum)
}
square(25)
console.log("======================================")
// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console.
const findMax = function(a, b) {
    return a > b ? a : b;
};

// Example usage:
let num1 = 5;
let num2 = 10;
let maxNumber = findMax(num1, num2);
console.log(`The maximum of ${num1} and ${num2} is ${maxNumber}`);
console.log("======================================")
// Task 4: Write a function expression to concatenate two strings and return the result.
const concatenateStrings = function(str1, str2) {
    return str1 + str2;
};

// Example usage:
let string1 = "Hello, ";
let string2 = "World!";
let result = concatenateStrings(string1, string2);
console.log(result); // Output: Hello, World!
console.log("======================================")
// Activity 3: Arrow Functions

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result.
const sum = (a, b) => a + b;

// Example usage:
let num3 = 5;
let num4 = 10;
let sumAns = sum(num3, num4);
console.log(sumAns); // Output: 15
console.log("======================================")
// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value.
const containsChar = (str, char) => str.includes(char);

// Example usage:
let string = "Hello, World!";
let character = "W";
let resultNew = containsChar(string, character);
console.log(resultNew); // Output: true
console.log("======================================")

// Activity 4: Function Parameters and Default Values

// Task 7: Write a function that takes two parameters and returns their product. Provide a default value for the second parameter. 
const multiply = (a, b = 1) => a * b;

// Example usage:
let result1 = multiply(5, 10);
console.log(result1); // Output: 50

let result2 = multiply(7);
console.log(result2); // Output: 7
console.log("======================================")
// Task 8: Write a function that takes a person's name and age and returns a greeting message. Provide a default value for the age.
const greet = (name, age = 'unknown') => {
    return `Hello, ${name}! You are ${age} years old.`;
};

// Example usage:
let greeting1 = greet("Pratik", 25);
console.log(greeting1); // Output: Hello, Pratik! You are 25 years old.

let greeting2 = greet("Alice");
console.log(greeting2); // Output: Hello, Alice! You are unknown years old.
console.log("======================================")
// Activity 5: Higher-Order Functions
// Task 9: Write a higher-order function that takes a function and a number, and calls the function that many times.
const repeatFunction = (func, times) => {
    for (let i = 0; i < times; i++) {
        func();
    }
};

// Example usage:
const sayHello = () => {
    console.log("Hello!");
};

repeatFunction(sayHello, 3);
// Output:
// Hello!
// Hello!
// Hello!
console.log("======================================")
// Task 10: Write a higher-order function that takes two functions and a value, applies the first function to the value, and then applies the second function to the result.
const applyFunctions = (func1, func2, value) => {
    return func2(func1(value));
};

// Example usage:
const addOne = x => x + 1;
const square1 = x => x * x;

let result3 = applyFunctions(addOne, square1, 3);
console.log(result3); // Output: 16 (square(addOne(3)) = square(4) = 16)

let result4 = applyFunctions(addOne, square1, 5);
console.log(result4); // Output: 36 (square(addOne(5)) = square(6) = 36)


// Feature Request:

// 1. Even or Odd Function Script: Write a script that includes a function to check if a number is even or odd and logs the result.

// 2. Square Calculation Function Script: Create a script that includes a function to calculate the square of a number and returns the result. 3. Concatenation Function Script: Write a script that includes a function expression to concatenate two strings and returns the result.

// 4. Sum Calculation Arrow Function Script: Create a script that includes an arrow function to calculate the sum of two numbers and returns the result.

// 5. Higher-Order Function Script: Write a script that includes a higher-order function to apply a given function multiple times.

// Achievement:

// By the end of these activities, students will:

// Understand and define functions using function declarations, expressions, and arrow functions.

// Use function parameters and default values effectively.

// Create and utilize higher-order functions.

// Apply functions to solve common problems and perform calculations.