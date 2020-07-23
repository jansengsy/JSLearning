const users = ['Nathan', 'John', 'William'];

// One line arrow function
const sayHello = () => console.log('Hello');

// One line arrow function return
const sayHelloReturn = () => 'Hello';

// Once line arrow function returning object
const sayHelloReturn2 = () => ({ msg: 'Say hello' });

// Single parameters don't need parentheses
const sayMessage = (message) => console.log(message);

const sayName = (firstName, lastName) => {
  console.log(`${firstName} ${lastName}`);
};

const nameLengths = users.map((name) => {
  return name.length;
});

const nameLengthsShortest = users.map((name) => name.length);

sayHello();
console.log(sayHelloReturn());
console.log(sayHelloReturn2());
sayMessage('Hi');
sayName('John', 'Doe');
console.log(nameLengths);
console.log(nameLengthsShortest);
