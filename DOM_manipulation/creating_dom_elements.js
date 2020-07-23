// Create element
const li = document.createElement('li');

// Add a class
li.className = 'collection-item';

// Add an ID
li.id = 'new-item';

// Add an attribute
li.setAttribute('title', 'New Item');

// Create text node and append to li
li.appendChild(document.createTextNode('Hello world!'));

// Create new link element
const link = document.createElement('a');
link.className = 'delete-item secondary-content';

// Append icon as child to link
link.innerHTML = '<i class="fa fa-remove"></i>';

// Append link as child to li
li.appendChild(link);

// Append li as child to ul
const ul = document.querySelector('ul.collection');
ul.appendChild(li);

console.log(li);
