const form = document.querySelector('form');
const cels = document.querySelector('#temp-input-c');
const far = document.querySelector('#temp-input-f');

cels.addEventListener('keyup', convertC);
far.addEventListener('keyup', convertF);

function convertC(e) {
  const celsius = e.target.value;
  far.value = celsius * (9 / 5) + 32;
}

function convertF(e) {
  const fahrenheit = e.target.value;
  cels.value = (fahrenheit - 32) * (5 / 9);
}
