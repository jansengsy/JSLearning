// Define UI variables
const form = document.querySelector('form');
const taskList = document.querySelector('ul.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

// Load all event listeners
loadEventListeners();

// Load all event listeners
function loadEventListeners() {
  document.addEventListener('DOMContentLoaded', getTasks);
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', deleteTasks);
  clearBtn.addEventListener('click', clearTasks);
  filter.addEventListener('keyup', filterTasks);
}

// Get tasks from LS
function getTasks(e) {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.forEach(function (task) {
    // Create li element
    const li = document.createElement('li');
    li.className = 'collection-item';
    li.appendChild(document.createTextNode(task));

    // Create the link element which will hold the X icon
    const link = document.createElement('a');
    link.className = 'delete-item secondary-content';
    link.innerHTML = '<i class="fa fa-remove"></i>';
    li.appendChild(link);

    // Add li to ul
    taskList.appendChild(li);
  });
}

// Add tasks
function addTask(e) {
  e.preventDefault();

  // We don't want to add empty tasks
  if (taskInput.value === '') {
    alert('Please add a task');
    return;
  }

  // Create li element
  const li = document.createElement('li');
  li.className = 'collection-item';
  li.appendChild(document.createTextNode(taskInput.value));

  // Create the link element which will hold the X icon
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>';
  li.appendChild(link);

  // Add li to ul
  taskList.appendChild(li);

  // Save to local storage
  storeTaskInLocalStorage(taskInput.value, e);

  // Clear input
  taskInput.value = '';
}

function storeTaskInLocalStorage(task) {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  tasks.push(task);
  localStorage.setItem('tasks', JSON.stringify(tasks)); // Storage must store strings
}

function removeTaskFromLocalStorage(task) {
  let tasks;

  if (localStorage.getItem('tasks') === null) {
    tasks = [];
  } else {
    tasks = JSON.parse(localStorage.getItem('tasks'));
  }

  const index = tasks.indexOf(task);
  tasks.splice(index, 1);
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

function clearTasksFromLocalStorage() {
  localStorage.removeItem('tasks');
}

// Deleting tasks
function deleteTasks(e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if (confirm('Are you sure?')) {
      e.target.parentElement.parentElement.remove();
      removeTaskFromLocalStorage(
        e.target.parentElement.parentElement.textContent
      );
    }
  }
}

// Clearing tasks
function clearTasks(e) {
  while (taskList.firstChild) {
    taskList.removeChild(taskList.firstChild);
  }

  clearTasksFromLocalStorage();
}

// Filter tasks
function filterTasks(e) {
  const text = e.target.value.toLowerCase();

  // We can use array methods because querySelectorAll returns a node list
  document.querySelectorAll('.collection-item').forEach((li) => {
    if (li.textContent.toLowerCase().includes(text)) {
      li.style.display = 'block';
    } else {
      li.style.display = 'none';
    }
  });
}
