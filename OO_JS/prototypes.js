// Object.prototype

function Person(firstName, secondName, dob) {
  this.firstName = firstName; // The 'this' keyword pertains to the current instance
  this.secondName = secondName;
  this.birthday = new Date(dob);
}

Person.prototype.calculateAge = function () {
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
};

Person.prototype.getFullName = function () {
  return this.firstName + ' ' + this.secondName;
};

Person.prototype.getsMarried = function (newLastName) {
  this.secondName = newLastName;
};

// A different way to write these things:
class Person2 {
  constructor(firstName, secondName, dob) {
    this.firstName = firstName;
    this.secondName = secondName;
    this.birthday = new Date(dob);
  }

  calculateAge() {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  }

  getFullName() {
    return this.firstName + ' ' + this.secondName;
  }

  getsMarried(newLastName) {
    this.secondName = newLastName;
  }
}

const john = new Person('John', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Smith', 'march 20 1978');
const matt = new Person('Matt', 'Jones', '10/10/1969');

// Check console - these will be exactly the same:
console.log(mary);
console.log(matt);

console.log(john.calculateAge());
console.log(mary.getFullName());
mary.getsMarried('Rogers');
console.log(mary.getFullName());
