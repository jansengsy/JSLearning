let val;

const list = document.querySelector('ul.collection');
const listItem = document.querySelector('li.collection-item'); // Remember, querySelector will grab only the first instance it comes across

val = list;
val = listItem;

// Get child nodes of the UL
val = list.childNodes; // Returns node list
val = list.childNodes[0];
val = list.childNodes[0].nodeName;
val = list.childNodes[0].nodeType;

// NodeTypes have a key for their types: https://www.w3schools.com/jsref/prop_node_nodetype.asp

// Get children element nodes
val = list.children; // Returns HTML collection
val = list.children[0];
val = list.children[1].textContent = 'Hello';

// Get children of children
val = list.children[3].children;

// First child
val = list.firstChild; // This will include every child
val = list.firstElementChild; // This will only return HTML element children

// Last child
val = list.lastChild;
val = list.lastElementChild;

// How many child elements
val = list.childElementCount;

// Get parent node
val = listItem.parentNode;
val = listItem.parentElement; // In most cases these will return the same thing

// Get parent of parent
val = listItem.parentElement.parentElement;

// Get next sibling
val = listItem.nextSibling;
val = listItem.nextElementSibling;
val = listItem.nextElementSibling.nextElementSibling;

// Get previous sibling
val = listItem.previousSibling;
val = listItem.previousElementSibling; // In this case, this will return null - as we're dealing with the first list item
console.log(val);
