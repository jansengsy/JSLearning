// REPLACE ELEMENT

// Create element
const newHeading = document.createElement('h2');

// Add ID
newHeading.id = 'task-title';

// New text node
newHeading.appendChild(document.createTextNode('Task List'));

// Get old heading
const oldHeading = document.getElementById('task-title');

// Get parent
const headingParent = oldHeading.parentElement;

// Replace
headingParent.replaceChild(newHeading, oldHeading);

// REMOVE ELEMENT

const lis = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Remove list item
lis[0].remove();

// Remove child element
list.removeChild(lis[2]);

// CLASSES AND ATTRIBUTES

const firstLi = document.querySelector('li:first-child');
const link = firstLi.children[0];

let val;

// Classes
val = link.className;
val = link.classList; // Returns DOM token list (similar to arrays)
val = link.classList[0];
link.classList.add('test');
link.classList.remove('test');

// Attributes
val = link.getAttribute('href');
val = link.setAttribute('href', 'https://google.com');
val = link.hasAttribute('href'); // check if an element has an attribute
val = link.setAttribute('title', 'google');
val = link.removeAttribute('title');

console.log(val);
