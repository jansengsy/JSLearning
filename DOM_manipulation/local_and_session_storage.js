/*
  In the browser we have two types of storage available to us: Local and session. The
  difference between these two is that local will lear only when the user clears their
  cookies. Session will clear when the user closes the browser.
*/

// LOCAL STORAGE

// Set local storage
localStorage.setItem('name', 'John');
localStorage.setItem('age', '30');
localStorage.removeItem('name');

// Get from local storage
const name = localStorage.getItem('age');
console.log(name);

// Clear from local storage
//localStorage.clear();

// SESSION STORAGE

// Set session storage
sessionStorage.setItem('name', 'Kees');
sessionStorage.setItem('age', '28');
sessionStorage.removeItem('name');

// Get from session storage
const sessionAge = sessionStorage.getItem('age');
console.log(sessionAge);

// Clear from session storage
sessionStorage.clear();

// Working example

document.querySelector('form').addEventListener('submit', (e) => {
  e.preventDefault();

  // We want to store tasks as an array otherwise we will only be able to store one task
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks')); // Parsing the strings into a json object
  }

  const task = document.getElementById('task').value;
  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Storage must store strings
  alert('Task saved!');
});

const tasks = JSON.parse(localStorage.getItem('tasks'));

tasks.forEach((task, index) => {
  console.log(`Task ${index + 1}: ${task}`);
});
