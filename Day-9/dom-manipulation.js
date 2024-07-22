// Day 9: DOM Manipulation

// Tasks/Activities:

// Activity 1: Selecting and Manipulating Elements

// Task 1: Select an HTML element by its ID and change its text content.

function changeText() {
    // Select the element by its ID
    const heading = document.getElementById("myHeading");
    
    // Change the text content
    heading.textContent = "Updated Text!";
}

// Task 2: Select an HTML element by its class and change its background color.
function changeBackgroundColor() {
    // Select all elements with the class 'box'
    const elements = document.querySelectorAll('.box');
    
    // Loop through each element and change its background color
    elements.forEach(element => {
        element.style.backgroundColor = 'blue'; // Change to the desired color
    });
}
// Activity 2: Creating and Appending Elements

// Task 3: Create a new div element with some text content and append it to the body.
function newDiv(){const newDiv = document.createElement('div');

newDiv.textContent = 'This is a new div element!';

newDiv.style.color = 'blue'; // Change text color
newDiv.style.fontSize = '20px'; // Change font size
newDiv.style.padding = '10px'; // Add some padding
newDiv.style.border = '1px solid black'; // Add a border

newDiv.id = 'newId';
document.body.appendChild(newDiv);
}


// Task 4: Create a new li element and add it to an existing ul list.
function addListItem() {
    // Create a new li element
    const newListItem = document.createElement('li');
    
    // Set the text content for the new li
    newListItem.textContent = 'New Item';

    // Select the existing ul element by its ID
    const ulElement = document.getElementById('myList');
    
    // Append the new li element to the ul
    ulElement.appendChild(newListItem);
}
// Activity 3: Removing Elements

// Task 5: Select an HTML element and remove it from the DOM.
function rmDiv() {
    const element = document.getElementById('newId');
    
    // Remove the element from the DOM
    if (element) {
        element.remove();
    }else{
        alert("No elemt")
    }
}

// Task 6: Remove the last child of a specific HTML element.
function removeLastChild() {
    // Select the target element by ID
    const container = document.getElementById('container');
    
    // Check if the container has children
    if (container.lastElementChild) {
        // Remove the last child
        container.removeChild(container.lastElementChild);
    }
}
// Activity 4: Modifying Attributes and Classes

// Task 7: Select an HTML element and change one of its attributes (e.g., src of an img tag). 

// Task 8: Add and remove a CSS class to/from an HTML element.

// Activity 5: Event Handling

// Task 9: Add a click event listener to a button that changes the text content of a paragraph. 

      // JavaScript code to add event listener and change paragraph
      document.getElementById('myButton').addEventListener('click', function() {
        // Select the paragraph element by ID
        const paragraph = document.getElementById('myParagraph');
        
        // Change the text content
        paragraph.textContent = 'The text has been changed!';
        
        // Change the text color to blue
        paragraph.style.backgroundColor = 'blue';
    });
// Task 10: Add a mouseover event listener to an element that changes its border color.
const element = document.getElementById('myParagraph')
document.getElementById('myParagraph').addEventListener('mouseover',function(){
    element.style.border = '3px solid red';
})
document.getElementById('myParagraph').addEventListener('mouseout',function(){
    element.style.border = '3px solid blue';
})


// Feature Request:

// 1. Text Content Manipulation Script: Write a script that selects an HTML element by its ID and changes its text content. 2. Element Creation Script: Create a script that demonstrates creating a new div element and appending it to the body.

// 3. Element Removal Script: Write a script that selects an HTML element and removes it from the DOM. 4. Attribute Modification Script: Create a script that changes the attributes of an HTML element.

// 5. Event Handling Script: Write a script that adds event listeners to HTML elements to change their content or style based on user interactions.

// Achievement:

// By the end of these activities, students will:

// Select and manipulate DOM elements using JavaScript. Create and append new elements to the DOM.

// Remove elements from the DOM. Modify attributes and classes of HTML elements.

// Add and handle events to make web pages interactive.