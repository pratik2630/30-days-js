// Day 7: Objects

// Tasks/Activities:

// Activity 1: Object Creation and Access

// Task 1: Create an object representing a book with properties like title, author, and year, and log the object to the console.
const book = {
    title: "Atomic habit",
    author: "xyz",
    year: 2024
};

// Log the book object to the console
console.log(book);

// Task 2: Access and log the title and author properties of the book object.
console.log(book.title,book.author)

// Activity 2: Object Methods

// Task 3: Add a method to the book object that returns a string with the book's title and author, and log the result of calling this method.
const books = {
    title: "Atomic habit",
    author: "xyz",
    year: 2024,
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    }
};

console.log(books.getDetails())
// Task 4: Add a method to the book object that takes a parameter (year) and updates the book's year property, then log the updated object.
const book2 = {
    title: "Atomic habit",
    author: "xyz",
    year: 2024,
    getDetails: function() {
        return `${this.title} by ${this.author}`;
    },
    updateYear: function(newYear){
        this.year = newYear
    }
};
book2.updateYear(2000)
console.log(book2)

// Activity 3: Nested Objects

// Task 5: Create a nested object representing a library with properties like name and books (an array of book objects), and log the library object to the console. 

const library = {
    name: "Randomville Library",
    address: "456 Fictional Ave, Randomtown",
    books: [
        {
            title: "The Quest for Unknown",
            author: "Alice Wonder",
            year: 1987,
            genres: ["Mystery", "Thriller"],
            available: true
        },
        {
            title: "Galaxy of Dreams",
            author: "Bob Stellar",
            year: 2005,
            genres: ["Science Fiction", "Adventure"],
            available: false
        },
        {
            title: "The Whispering Woods",
            author: "Catherine Forest",
            year: 2012,
            genres: ["Fantasy", "Drama"],
            available: true
        }
    ]
};

// Log the library object to the console
console.log(library);



// Task 6: Access and log the name of the library and the titles of all the books in the library.
console.log("Library name :",library.name)
library.books.forEach(book =>{
    console.log("Book titles are:",book.title)
})
// Activity 4: The this Keyword

// Task 7: Add a method to the book object that uses the this keyword to return a string with the book's title and year, and log the result of calling this method.
// Define the library object with non-existing data and a method for each book
const library2 = {
    name: "Randomville Library",
    address: "456 Fictional Ave, Randomtown",
    books: [
        {
            title: "The Quest for Unknown",
            author: "Alice Wonder",
            year: 1987,
            genres: ["Mystery", "Thriller"],
            available: true,
            getTitleAndYear: function() {
                return `${this.title} (${this.year})`;
            }
        },
        {
            title: "Galaxy of Dreams",
            author: "Bob Stellar",
            year: 2005,
            genres: ["Science Fiction", "Adventure"],
            available: false,
            getTitleAndYear: function() {
                return `${this.title} (${this.year})`;
            }
        },
        {
            title: "The Whispering Woods",
            author: "Catherine Forest",
            year: 2012,
            genres: ["Fantasy", "Drama"],
            available: true,
            getTitleAndYear: function() {
                return `${this.title} (${this.year})`;
            }
        }
    ]
};

// Log the library2 object to the console
console.log(library2);

// Loop through the books and log the result of calling the getTitleAndYear method
library2.books.forEach(book => {
    console.log(book.getTitleAndYear());
});

console.log("-----------------")
// Activity 5: Object Iteration

// Task 8: Use a for. In loop to iterate over the properties of the book object and log each property and its value.

library2.books.forEach(book => {
    console.log(`Title: ${book.title}`);
    console.log(`Author: ${book.author}`);
    console.log(`Year: ${book.year}`);
    console.log(`Genres: ${book.genres.join(', ')}`);
    console.log(`Available: ${book.available}`);
    console.log('---');
});
// Task 9: Use Object.keys and Object values methods to log all the keys and values of the book object.

library2.books.forEach(book => {
    console.log("Book Keys:", Object.keys(book));
    console.log("Book Values:", Object.values(book));
});


// Feature Request:

// 1. Book Object Script: Write a script that creates a book object, adds methods to it, and logs its properties and method results. . Library Object Script: Create a script that defines a library object containing an array of book objects and logs the 2 library's details.

// 3. Object Iteration Script: Write a script that demonstrates iterating over an object's properties using for... in loop and Object.keys/Object.valves.

// Achievement:

// By the end of these activities, students will:

// Create and manipulate objects with properties and methods. Understand and use the this keyword in object methods.

// Work with nested objects and arrays of objects.

// Iterate over an object's properties using loops and built-in methods.