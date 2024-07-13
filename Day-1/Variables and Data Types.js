// Day 1: Variables and Data Types

// Tasks/Activities:

// Activity 1: Variable Declaration

// Task 1: Declare a variable using var, assign it a number, and log the value to the console.

var a = 10 
console.log(a)

// Task 2: Declare a variable using let, assign it a string, and log the value to the console.

let name = "Pratik"
console.log(name)

// Activity 2: Constant Declaration

// Task 3: Declare a variable using const, assign it a boolean value, and log the value to the console.
const val = true
console.log(val)

// Activity 3: Data Types

// Task 4: Create variables of different data types (number, string,  boolean, object, array) and log each variable's type using the typeof operator.
var number = 10
console.log(`Number is ${number} with type`,typeof number)

var string = "Pratik"
console.log(`string is ${string} with type`,typeof string)

var boolean = true
console.log(`boolean is ${boolean} with type`,typeof boolean)

var obj = {name:"Pratik",age:10};
console.log("Object is ", obj ,"with type ", typeof obj)
console.log("Object is "+ obj +"with type "+ typeof obj)
console.log(`object is ${obj} with type`,typeof obj)

var array = [1,2,3,4,5,"hello", true]
console.log(`array is ${array} with type`,typeof array)

// Activity 4: Reassigning Variables

// Task 5: Declare a variable using let, assign it an initial value, reassign a new value, and log both values to the console.

let val1 = "Initial val"
console.log("old val",val1)

val1 = "New val"
console.log("new val",val1)


// Activity 5: Understanding const

// Task 6: Try reassigning a variable declared with const and observe the error.

const err = "Hello const"
console.log(err)

// err = "New hello"
// console.log(err)

// Generated Error 
// TypeError: Assignment to constant variable.

// Feature Request:

// 1. Variable Types Console Log: Write a script that declares variables of different data types and logs both the value and type of each variable to the console. 
// 2. Reassignment Demo: Create a script that demonstrates the difference in behavior between let and const when it comes to reassignment.

// Achievement:

// By the end of these activities, you will:

// Know how to declare variables using var, let, and const.

// Understand the different data types in JavaScript.

// Be able to use the typeof operator to identify the data type of a variable.

// Understand the concept of variable reassignment and the immutability of const variables.