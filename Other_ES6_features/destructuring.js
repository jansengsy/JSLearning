// Destructuring Assignment

let a, b;

[a, b] = [100, 200];

// Rest patters
[a, b, ...rest] = [100, 200, 300, 400, 500];

({ a, b } = { a: 100, b: 200, c: 300, d: 400, e: 500 });
({ a, b, ...rest } = { a: 100, b: 200, c: 300, d: 400, e: 500 });

console.log(a);
console.log(b);
console.log(rest);

// ARRAY DESTRUCTURING
const people = ['John', 'Beth', 'Mike'];

const [person1, person2, person3] = people;

console.log(person1);
console.log(person2);

// Parse array return from function
function getPeople() {
  return ['John', 'Beth', 'Mike'];
}

let personA, personB, personC;

[personA, personB, personC] = getPeople();

console.log(personA);
console.log(personB);
console.log(personC);

// OBJECT DESTRUCTURING
const person = {
  name: 'John Doe',
  age: 32,
  city: 'Miami',
  gender: 'Male',
  sayHello: function () {
    console.log('hello');
  },
};

// Old ES5 way:
const es5Name = person.name,
  es5Age = person.age,
  es5City = person.city;

// New ES6 way:
const { name, age, city, sayHello } = person;

console.log(name);
console.log(city);
console.log(age);
sayHello();
