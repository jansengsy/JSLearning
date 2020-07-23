// FIRST SELECTOR: document.getElementById()

console.log(document.getElementById('task-title'));

// Get things from the element

console.log(document.getElementById('task-title').id);
console.log(document.getElementById('task-title').className);

const taskTitle = document.getElementById('task-title');
// Change styling

taskTitle.style.background = 'red';
taskTitle.style.color = 'white';
taskTitle.style.padding = '5px';

// Change content
taskTitle.textContent = 'Task list';
taskTitle.innerText = 'My Tasks';
taskTitle.innerHTML = '<span style="color:blue">Tasks tasks tasks</span>';

// SECOND SELECTOR: document.querySelector()

console.log(document.querySelector('#task-title')); // Grabbing something bt ID
console.log(document.querySelector('.task-title')); // Grabbing something bt class

console.log(document.querySelector('h5')); // If there are more than one H5s on the page, we will grab the first one
document.querySelector('li').style.color = 'red';

// Examples of how we can select a specific instance of a html element on the page (using css sudo classes)
document.querySelector('li:last-child').style.color = 'red';
document.querySelector('li:nth-child(3)').style.color = 'yellow';
document.querySelector('li:nth-child(4)').textContent = 'New text';

// Having said that - we can't use css sudo classes for multiple selections (like odd), as querySelector only selects on element
document.querySelector('li:nth-child(odd)').style.background = 'grey';
