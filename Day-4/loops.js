// Tasks/Activities:

// Activity 1: For Loop

// Task 1: Write a program to print numbers from 1 to 10 using a for loop.

console.log("print 1 to 10")
for (let i = 1; i <= 10; i++) {
    console.log(i)
    
}
// Task 2: Write a program to print the multiplication table of 5 using a for loop.
console.log("Table of 5:")
for (let m = 1; m <= 10; m++) {
    console.log(m*5)
    
}
// Activity 2: While Loop

// Task 3: Write a program to calculate the sum of numbers from 1 to 10 using a while loop. 
var a=1
var sum=0
while (a <=10) {
    sum += a 
    a++
}
console.log("Sum is :",sum) 

// Task 4: Write a program to print numbers from 10 to 1 using a while loop.

let num = 10
while (num >=1) {
    console.log(num)
    num--
    
}
// Activity 3: Do... While Loop

// Task 5: Write a program to print numbers from 1 to 5 using a do...while loop.
console.log("1 to 5 using do while")
var count = 1
do {
    
    console.log(count)
    count++
    
} while (count<=5);

// • Task 6: Write a program to calculate the factorial of a number using a do...while loop.

// Define the number to calculate the factorial of
let number = 5;

// Initialize variables
let factorial = 1;
let n = number;

// Use a do...while loop to calculate the factorial
do {
    factorial *= n;
    n--;
} while (n > 0);

// Log the result to the console
console.log(`The factorial of ${number} is: ${factorial}`);

// Activity 4: Nested Loops

// Task 7: Write a program to print a pattern using nested for loops:

// *
// **
// ***
// ****
// *****
for (let x = 1; x <= 5; x++) {
    var add = " "
    for (let y = 1; y <= x; y++) {
       
        add += "*" 
    }
    console.log(add)
}

// Activity 5: Loop Control Statements


// Task 8: Write a program to print numbers from 1 to 10, but skip the number 5 using the continue statement.
console.log("Used skip for 5")
for (let con = 1; con <= 10; con++) {
    if(con==5){
        continue
    }
    console.log(con)
    
}

// Task 9: Write a program to print numbers from 1 to 10, but stop the loop when the number is 7 using the break statement.
console.log("Used break for 7")
for (let con = 1; con <= 10; con++) {
    if(con==7){
        break
    }
    console.log(con)
    
}
