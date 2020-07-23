// ITERATORS

function nameIterator(names) {
  let nextIndex = 0;

  return {
    next: function () {
      return nextIndex < names.length
        ? { value: names[nextIndex++], done: false }
        : { done: true };
    },
  };
}

// Array of names
const namesArray = ['Jack', 'Jill', 'John'];

// Initialize the iterator and pass in names array
const names = nameIterator(namesArray);

console.log(names.next().value);
console.log(names.next().value);
console.log(names.next().value);

// GENERATORS

// The * denoted generator to compiler
function* sayNames() {
  yield 'Jack';
  yield 'Jill';
  yield 'John';
}

const name = sayNames();

console.log(name.next().value);
console.log(name.next().value);
console.log(name.next().value);

// ID Generator
function* createIDs() {
  let index = 0;

  while (true) {
    yield ++index;
  }
}

const ids = createIDs();

console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
console.log(ids.next().value);
