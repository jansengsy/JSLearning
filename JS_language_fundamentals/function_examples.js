// FUNCTION DECLARATIONS

function greet(firstName = 'John', lastName = 'Doe') {
  // Default parameters
  return `Hello ${firstName} ${lastName}`;
}

// Arrow function
const greeting = (name) => {
  return `Hey ${name}`;
};

console.log(greet('Steve', 'Mitchell'));

// FUNCTION EXPRESSIONS

const square = function (x = 2) {
  return x * x;
};

console.log(square(8));

// IMMEDIATELY INVOCABLE FUNCTION EXPRESSIONS - IIFEs

(function () {
  console.log('IIFE Ran...');
})(); // Need these parentheses to invoke the function

(function (name) {
  console.log(`Hello ${name}`);
})('Kees');

// PROPERTY METHODS

const todo = {
  add: function () {
    console.log('Add todo...');
  },
  edit: function (id) {
    console.log(`Edit ${id}`);
  },
};

// Adding property method
todo.delete = function () {
  console.log('Delete todo...');
};

todo.add();
todo.edit(22);
todo.delete();
