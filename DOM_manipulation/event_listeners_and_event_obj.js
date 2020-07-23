// Adding an event listener to the clear tasks button
document.querySelector('.clear-tasks').addEventListener('click', (e) => {
  // We can pass the event object to our anonymous function and do things with it, for example:
  e.preventDefault();
  // ^-- this stops the link redirecting us
  console.log('Clicked!');
});

// This is an example of us using a named function, instead of an anonymous one
document.querySelector('.clear-tasks').addEventListener('click', onClick);

function onClick(e) {
  // Let's have a look at the event object (https://developer.mozilla.org/en-US/docs/Web/API/Event)
  e.preventDefault();
  let val;

  val = e;

  // Event target element
  val = e.target;
  val = e.target.id;
  val = e.target.className;
  val = e.target.classList;

  // You can mutate the target element
  val = e.target.innerText = 'Hello';

  // Event type
  val = e.type; // This will be the type that we added with addEventListener (line 11, in this case click)

  // Timestamp
  val = e.timeStamp;

  // Coordinates of the event relative to the window (So, the x and y of the mouse relative to the edge of the window)
  val = e.clientY;
  val = e.clientX;

  // Coordinates of the event relative to the element (So, if I click at the very top of the button, offsetY = 0)
  val = e.offsetY;
  val = e.offsetX;

  console.log(val);
}
