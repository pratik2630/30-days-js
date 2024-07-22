
// Day 8: ES6+ Features

// Tasks/Activities:

// Activity 1: Template Literals

// Task 1: Use template literals to create a string that includes variables for a person's name and age, and log the string to the console.
const name = "Alice";
const age = 25;
const greeting = `Hello, my name is ${name} and I am ${age} years old.`;
console.log(greeting);

// Task 2: Create a multi-line string using template literals and log it to the console.
const multiLine = `
This is a string
that spans multiple
lines.
`;
console.log(multiLine);

// Activity 2: Destructuring

// Task 3: Use array destructuring to extract the first and second elements from an array of numbers and log them to the console. 
const numbers = [10, 20, 30, 40, 50];

// Array destructuring to get the first and second elements
const [first, second] = numbers;

console.log("First element:", first);  // Output: First element: 10
console.log("Second element:", second); // Output: Second element: 20

// Task 4: Use object destructuring to extract the title and author from a book object and log them to the console.
const book = {
    title: "The Great Adventure",
    author: "Jane Doe",
    year: 2023,
    genres: ["Adventure", "Fantasy"]
};

// Object destructuring to get the title and author
const { title, author } = book;

console.log("Title:", title);   // Output: Title: The Great Adventure
console.log("Author:", author); // Output: Author: Jane Doe

// Activity 3: Spread and Rest Operators

// Task 5: Use the spread operator to create a new array that includes all elements of an existing array plus additional elements, and log the new array to the console. 
const existingArray = [1, 2, 3, 4];

// Use the spread operator to create a new array with additional elements
const newArray = [...existingArray, 5, 6, 7];

console.log("New array:", newArray);
// Output: New array: [1, 2, 3, 4, 5, 6, 7]

// Task 6: Use the rest operator in a function to accept an arbitrary number of arguments, sum them, and return the result.
// Function that uses the rest operator to sum arbitrary numbers
function sum(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}

// Example usage
const result = sum(1, 2, 3, 4, 5);
console.log("Sum:", result); // Output: Sum: 15

// Activity 4: Default Parameters

// Task 7: Write a function that takes two parameters and returns their product, with the second parameter having a default value of 1. Log the result of calling this function with and without the second parameter.
// Function to calculate the product of two parameters
function multiply(a, b = 1) {
    return a * b;
}

// Calling the function with both parameters
const resultWithBothParams = multiply(5, 3);
console.log("Result with both parameters:", resultWithBothParams); // Output: 15

// Calling the function with only the first parameter
const resultWithOneParam = multiply(7);
console.log("Result with one parameter:", resultWithOneParam); // Output: 7

// Activity 5: Enhanced Object Literals

// Task 8: Use enhanced object literals to create an object with methods and properties, and log the object to the console. 

const person = {
    // Property with shorthand syntax
    firstName: "John",
    lastName: "Doe",
    age: 30,

    // Method with shorthand syntax
    fullName() {
        return `${this.firstName} ${this.lastName}`;
    },

    // Method using computed property names
    greet(message) {
        return `${message}, ${this.fullName()}!`;
    }
};

// Log the object to the console
console.log(person);

// Log results of calling methods
console.log("Full Name:", person.fullName());         // Output: Full Name: John Doe
console.log(person.greet("Hello")); // Output: Hello, John Doe!


// Task 9: Create an object with computed property names based on variables and log the object to the console.
// Variables to use as property names
const prop1 = "firstName";
const prop2 = "lastName";

// Create an object with computed property names
const person2 = {
    [prop1]: "John",
    [prop2]: "Doe",
    age: 30,
    getFullName() {
        return `${this[prop1]} ${this[prop2]}`;
    }
};

// Log the object to the console
console.log(person2);

// Log the result of calling the getFullName method
console.log("Full Name:", person2.getFullName());

// Feature Request:

// 1. Template Literals Script: Write a script that demonstrates the use of template literals to create and log strings with embedded variables and multi-line strings. 2. Destructuring Script: Create a script that uses array and object destructuring to extract values and log them. 3. Spread and Rest Operators Script: Write a script that demonstrates the use of the spread operator to combine arrays and the rest operator to handle multiple function arguments.

// 4. Default Parameters Script: Create a script that defines a function with default parameters and logs the results of calling it with different arguments. 5. Enhanced Object Literals Script: Write a script that uses enhanced object literals to create and log an object with methods and computed property names,

// Achievement:

// By the end of these activities, students will:

// Understand and use template literals for string interpolation and multi-line strings

// Apply destructuring to extract values from arrays and objects.

// Utilize spread and rest operators for array manipulation and function arguments.

// Define functions with default parameters.

// Create objects using enhanced object literals, including methods and computed property names.