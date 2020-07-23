// Var, let, const

// Don't use var !!!
var name = 'John Doe';
console.log(name);
name = 'Steve Smith';
console.log(name);

// Initializing a variable
var greeting;
console.log(greeting);
greeting = 'Hello';
console.log(greeting);

// LET

// Variables can include: Letters, numbers, _, $
// Cannot start with a number
// Multi word variable
let firstName = 'John'; // Camel case
let first_name = 'Sara'; // Underscore case
let FirstName = 'Tom'; // Pascal case

let name2 = 'John Doe';
console.log(name);
name2 = 'Steve Smith';
console.log(name);

let greeting2;
console.log(greeting2);
greeting = 'Hello2';
console.log(greeting2);

// CONST
const name3 = 'Mike';
console.log(name3);

const person = {
  name: 'John',
  age: 30,
};

console.log(person);

// We can change the values within const objects, just not the object itself:

person.name = 'Jess'; // Okay
console.log(person);

// person = { job: 'dev' }; // Not okay

const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

// We can change the values within const arrays, just not the array itself:

numbers.push(6); // Okay
console.log(numbers);

// numbers = [10, 11, 12]; // Not okay
