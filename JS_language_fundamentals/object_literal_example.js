const person = {
  firstName: 'Steve',
  lastName: 'Mitchell',
  age: 30,
  email: 'Steve@gmail.com',
  hobbies: ['programming', 'sports'],
  address: {
    city: 'Miami',
    state: 'FL',
  },
  getBirthYear: function () {
    return 2020 - this.age; // This pertains to the object
  },
};

let val;

val = person;
val = person.firstName;
val = person['firstName'];
val = person.age;
val = person.hobbies;
val = person.hobbies[1];
val = person.address.city;
val = person.getBirthYear();

console.log(val);

const people = [
  { name: 'Steve', age: 30 },
  { name: 'Mike', age: 23 },
];
