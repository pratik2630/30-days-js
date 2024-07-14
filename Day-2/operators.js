// Day 2: Operators

// Tasks/Activities:

// Activity 1: Arithmetic Operations

// Task 1: Write a program to add two numbers and log the result to the console. 
console.log("Add ",7+10)
// Task 2: Write a program to subtract two numbers and log the result to the console.
console.log("Sub ",17-10)
// Task 3: Write a program to multiply two numbers and log the result to the console. 
console.log("Mul ",7*10)
//Task 4: Write a program to divide two numbers and log the result to the console.
console.log("Div ",7/10)
// Task 5: Write a program to find the remainder when one number is divided by another and log the result to the console.
console.log("Reminder ",7%10)
// Activity 2: Assignment Operators

// Task 6: Use the += operator to add a number to a variable and log the result to the console.

// Task 7: Use the -=operator to subtract a number from a variable and log the result to the console.
var a=10
console.log("a ",a)
a+=3
console.log("Addition ",a)

var a=10
console.log("a ",a)
a-=3
console.log("Substraction ",a)

// Activity 3: Comparison Operators

// Task B: Write a program to compare two numbers using compare two numbers using > and < and and log the result to the console. and log the result to the console.
// Define two numbers
let num1 = 5;
let num2 = 10;

// Compare the numbers using > and < and log the results
if (num1 > num2) {
    console.log(`${num1} is greater than ${num2}.`);
} else if (num1 < num2) {
    console.log(`${num1} is less than ${num2}.`);
} else {
    console.log(`${num1} is equal to ${num2}.`);
}

// Task 9: Write a program to comparr two numbers using >= and <= and log result
// Define two numbers
let num3 = 15;
let num4 = 15;

// Compare the numbers using >= and <= and log the results
if (num3 >= num4) {
    console.log(`${num3} is greater than or equal to ${num4}.`);
} else if (num3 <= num4) {
    console.log(`${num3} is less than or equal to ${num4}.`);
}

// Task 10: Write a program to compare two numbers using == and === and log the result to the console.
// Define two numbers
let num5 = '20'; // string
let num6 = 20;   // number

// Compare the numbers using == and === and log the results
if (num5 == num6) {
    console.log(`${num5} == ${num6} is true.`); // This will log as true because == does type conversion
} else {
    console.log(`${num5} == ${num6} is false.`);
}

if (num5 === num6) {
    console.log(`${num5} === ${num6} is true.`); // This will log as false because === does not do type conversion
} else {
    console.log(`${num5} === ${num6} is false.`);
}

// Activity 4: Logical Operators

// Task 11: Write a program that uses the && operator to combine two conditions and log the result to the console.
// Define two numbers
let age = 25;
let isCitizen = true;

// Use the && operator to combine two conditions
if (age >= 18 && isCitizen) {
    console.log("The person is eligible to vote."); // Output: The person is eligible to vote.
} else {
    console.log("The person is not eligible to vote.");
}


// Task 12: Write a program that uses the || operator to combine two conditions and log the result to the console.
// Define two numbers
let temperature = 30;
let isRaining = false;

// Use the || operator to combine two conditions
if (temperature > 35 || isRaining) {
    console.log("It's either too hot or it's raining."); // Output: It's either too hot or it's raining.
} else {
    console.log("The weather is fine.");
}

// Task 13: Write a program that uses the operator to negate a condition and log the result to the console.
// Define a variable
let isWeekend = false;

// Use the ! operator to negate the condition
if (!isWeekend) {
    console.log("It's a weekday."); // Output: It's a weekday.
} else {
    console.log("It's a weekend.");
}

// Activity 5: Ternary Operator

// Task 14: Write a program that uses the ternary operator to check if a number is positive or negative and log the result to the console.
// Define a number
let number = -5;

// Use the ternary operator to check if the number is positive or negative
let result = (number >= 0) ? "The number is positive." : "The number is negative.";

// Log the result to the console
console.log(result); // Output: The number is negative.


// Feature Request:

// 1. Arithmetic Operations Script: Write a script that performs basic arithmetic operations (addition, subtraction, multiplication, division, remainder) on two numbers and logs the results. 
// Define two numbers for arithmetic operations
let num1 = 10;
let num2 = 3;

// Perform arithmetic operations
let addition = num1 + num2;
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let remainder = num1 % num2;

// Log the results
console.log(`Addition: ${num1} + ${num2} = ${addition}`);
console.log(`Subtraction: ${num1} - ${num2} = ${subtraction}`);
console.log(`Multiplication: ${num1} * ${num2} = ${multiplication}`);
console.log(`Division: ${num1} / ${num2} = ${division}`);
console.log(`Remainder: ${num1} % ${num2} = ${remainder}`);


//2. Comparison and Logical Operators Script: Create a script that compares two numbers using different comparison operators and combines conditions using logical operators, logging the results.
// Define two numbers for comparison and logical operations
let a = 5;
let b = 10;

// Comparison operators
console.log(`${a} > ${b}:`, a > b);
console.log(`${a} < ${b}:`, a < b);
console.log(`${a} >= ${b}:`, a >= b);
console.log(`${a} <= ${b}:`, a <= b);
console.log(`${a} === ${b}:`, a === b);
console.log(`${a} !== ${b}:`, a !== b);

// Logical operators
let isPositiveA = a > 0;
let isPositiveB = b > 0;
console.log(`${a} is positive && ${b} is positive:`, isPositiveA && isPositiveB);
console.log(`${a} is positive || ${b} is positive:`, isPositiveA || isPositiveB);
console.log(`!(${a} is positive):`, !isPositiveA);

// 3. Ternary Operator Script: Write a script that uses the ternary operator to determine if a number is positive or negative and logs the result.
// Define a number for ternary operator example
let number = -7;

// Use ternary operator to determine if number is positive or negative
let result = (number >= 0) ? `${number} is positive.` : `${number} is negative.`;

// Log the result
console.log(result);

// Achievement:

// By the end of these activities, students will:

// Understand and use arithmetic operators to perform basic calculations

// Use assignment operators to modify variable values.

// Compare values using comparison operators Combine conditions using logical operators.

// Use the ternary operator for concise conditional expressions.
