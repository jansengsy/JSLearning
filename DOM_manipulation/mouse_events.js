const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card');
const taskHeading = document.querySelector('h5');

// Click
clearBtn.addEventListener('click', runEvent);

// Double click
clearBtn.addEventListener('dblclick', runEvent);

// Mouse down
clearBtn.addEventListener('mousedown', runEvent);

// Mouse up
clearBtn.addEventListener('mouseup', runEvent);

// Mouse enter
card.addEventListener('mouseenter', runEvent);

// Mouse leave
card.addEventListener('mouseleave', runEvent);

// Mouse over
card.addEventListener('mouseover', runEvent);

// Mouse out
card.addEventListener('mouseout', runEvent);

/*
  ^-- These events are similar but they are different. If you have an element with other elements
  inside, mouse enter/leave will only fire when leaving or entering the elements outer bounds.
  However, mouseover/out will fire each time you enter a new element within the element with
  those event listeners attached.
*/

// Mouse move
clearBtn.addEventListener('mousemove', runEvent);

// Event handler
function runEvent(e) {
  e.preventDefault();
  console.log(`EVENT TYPE: ${e.type}`);

  // An example of what you can do using the mouse move event
  taskHeading.textContent = `MouseX: ${e.offsetX}, MouseY: ${e.offsetY}`;

  // Another cool example of what you can do with mouse move
  document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 40)`;
}
