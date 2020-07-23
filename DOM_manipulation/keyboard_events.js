const form = document.querySelector('form');
const taskInput = document.getElementById('task');
const heading = document.querySelector('h5');

// Clear input
taskInput.value = '';

//form.addEventListener('submit', runEvent);

// Keydown
// taskInput.addEventListener('keydown', runEvent);

// Keyup
// taskInput.addEventListener('keyup', runEvent);

// Keypress
// taskInput.addEventListener('keypress', runEvent);

// Focus
taskInput.addEventListener('focus', runEvent); // When we click inside an input

// Blur
taskInput.addEventListener('blur', runEvent); // When we click out of an input

// Cut
taskInput.addEventListener('cut', runEvent);

// Paste
taskInput.addEventListener('paste', runEvent);

// Input
taskInput.addEventListener('input', runEvent);

function runEvent(e) {
  //e.preventDefault();

  // heading.innerText = e.target.value;

  console.log(`EVENT TYPE: ${e.type}`);
  console.log(e.target.value);
}
