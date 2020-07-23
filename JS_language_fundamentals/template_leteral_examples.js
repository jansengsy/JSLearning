const name = 'John';
const age = 30;
const job = 'Web Developer';
const city = 'London';
let html;

// Without template literals (ES5)
html =
  '<ul><li>Name: ' +
  name +
  '</li><li>Age: ' +
  age +
  '</li><li>Job: ' +
  job +
  '</li><li>City: ' +
  city +
  '</li></ul>';

// ^-- Bit awkward...

function hello() {
  return 'Hello';
}
// With template literals (ES6)
html = `<ul>
          <li>Name: ${name}</li>
          <li>Age: ${age}</li>
          <li>Job: ${job}</li>
          <li>City: ${city}</li>
          <li>${2 + 2}</li>
          <li>${hello()}</li>
        </ul>`;

document.body.innerHTML = html;
