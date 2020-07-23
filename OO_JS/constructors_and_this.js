// CONSTRUCTORS + This keyword

// constructors should start with a capital
function Person(name, dob) {
  this.name = name; // The 'this' keyword pertains to the current instance
  this.birthday = new Date(dob);
  this.calculateAge = function () {
    const diff = Date.now() - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs(ageDate.getUTCFullYear() - 1970);
  };
  console.log(this);
}

const brad = new Person('Brad', '9-10-1981');
const john = new Person('John', '6-10-1992');
console.log(brad);
console.log(john);
console.log(john.calculateAge());
console.log(this);
