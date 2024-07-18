// Day 6: Arrays

// Tasks/Activities:

// Activity 1: Array Creation and Access

// Task 1: Create an array of numbers from 1 to 5 and log the array to the console.
console.log(" Task 1: Create an array of numbers from 1 to 5 and log the array to the console.")
var arr = [7,2,42,21,4]
console.log(arr)
// Task 2: Access the first and last elements of the array and log them to the console.
console.log(" Task 2: Access the first and last elements of the array and log them to the console.")
console.log(arr[0])
console.log(arr[arr.length - 1])

// Activity 2: Array Methods (Basic)

// Task 3: Use the push method to add a new number to the end of the array and log the updated array  
console.log("Task 3: Use the push method to add a new number to the end of the array and log the updated array  ")
arr.push(3)
console.log(arr)



// Task 4: Use the pop method to remove the last element from the array and log the updated array.
console.log("Task 4: Use the pop method to remove the last element from the array and log the updated array.")
arr.pop()
console.log(arr)

// Task 5: Use the shift method to remove the first element from the array and log the updated array.
console.log("Task 5: Use the shift method to remove the first element from the array and log the updated array.")
arr.shift()
console.log(arr)

// Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.
console.log("Task 6: Use the unshift method to add a new number to the beginning of the array and log the updated array.")
arr.unshift(12)
console.log(arr)

// Activity 3: Array Methods (Intermediate)

// Task 7: Use the map method to create a new array where each number is doubled and log the new array.
console.log("Map")
const numbers = [1, 2, 3, 4, 5];

// Use the map method to create a new array with each number doubled
const doubledNumbers = numbers.map(number => number * 2);

// Log the new array to the console
console.log(doubledNumbers); // Output: [2, 4, 6, 8, 10]

// Task 8: Use the filter method to create a new array with only even numbers and log the new array. 
console.log("filter")
const Numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the filter method to create a new array with only even numbers
const evenNumbers = Numbers.filter(number => number % 2 === 0);

// Log the new array to the console
console.log(evenNumbers); // Output: [2, 4, 6, 8, 10]


// Task 9: Use the reduce method to calculate the sum of all numbers in the array and log the result.
const numbersReduce = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Use the reduce method to calculate the sum of all numbers in the array
const sum = numbersReduce.reduce((accumulator, currentValue) => accumulator + currentValue, 0);

// Log the result to the console
console.log(sum); // Output: 55

// Activity 4: Array Iteration

// Task 10: Use a for loop to iterate over the array and log each element to the console.
console.log("Task 10: Use a for loop to iterate over the array and log each element to the console.")
for (let i = 0; i < arr.length; i++) {
    console.log(arr[i]);
    
}
// Task 11: Use the forEach method to iterate over the array and log each element to the console.
console.log("Using foreach")
arr.forEach(element => {
    console.log(element)
});
// Activity 5: Multi-dimensional Arrays

// Task 12: Create a two-dimensional array (matrix) and log the entire array to the console. 
// Create a two-dimensional array (matrix)
const matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];

// Log the entire array to the console
console.log(matrix);

// Optionally, you can log each row separately for better readability
matrix.forEach(row => {
    console.log(row);
});

// Task 13: Access and log a specific element from the two-dimensional array.

console.log(matrix[0][2])
// Feature Request:

// 1. Array Manipulation Script: Write a script that demonstrates the creation of an array, adding and removing elements using push, pop, shift, and unshift methods.

// Array Transformation Script: Create a 2. script that uses map, filter, and reduce methods to transform and aggregate array data. both for loop and forEach method and logs each element.

// 3. Array Iteration Script: Write a script that iterates over an array using 4. Two-dimensional Array Script: Create a script that demonstrates the creation and manipulation of a two-dimensional array

// Achievement:

// By the end of these activities, students will:

// Create and manipulate arrays using various methods.

// Transform and aggregate array data using map, filter, and reduce.

// using loops and iteration methods.
