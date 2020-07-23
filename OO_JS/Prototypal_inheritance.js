// Person constructor
function Person(firstName, lastName) {
  this.firstName = firstName;
  this.lastName = lastName;
}

// Greeting
Person.prototype.greeting = function () {
  return `Hello there ${this.firstName + ' ' + this.lastName}`;
};

const person1 = new Person('John', 'Doe');
console.log(person1.greeting());

// Customer constructor
function Customer(firstName, lastName, phone, membership) {
  // Call allows us to call another function from somewhere lese in the current context
  Person.call(this, firstName, lastName); // This is the context from here that we're passing over

  this.phone = phone;
  this.membership = membership;
}

// Inherit the Person prototype methods (In this example its the greeting function)
Customer.prototype = Object.create(Person.prototype);

// Make customer.prototype return Customer()
Customer.prototype.constructor = Customer;

// Customer greeting
Customer.prototype.greeting = function () {
  return `Hello there ${
    this.firstName + ' ' + this.lastName
  }. Welcome to our company`;
};

const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');

console.log(customer1);
console.log(customer1.greeting());

// Another way of writing this
class Customer2 extends Person {
  constructor(firstName, lastName, phone, membership) {
    super(firstName, lastName);
    this.phone = phone;
    this.membership = membership;
  }
}

const customer2 = new Customer2('Matt', 'Rogers', '111-111-1111', 'Gold');

console.log(customer2);
console.log(customer2.greeting());
