// FOR LOOP - Use when you know how many times a loop will run

for (let i = 0; i < 10; i++) {
  // console.log(`i: ${i}`);
}

for (let i = 0; i < 10; i++) {
  if (i === 2) {
    // console.log('Two is my favorite number!');
    continue; // This will skip loop to next iteration
  }

  if (i == 8) {
    // console.log('Stop the loop');
    break;
  }

  // console.log(`i: ${i}`);
}

// WHILE LOOP - Use when you don't know how many times a loop will run

let i = 0;

while (i < 10) {
  // console.log(`Number ${i}`);
  i++;
}

// DO WHILE LOOP - Will always run once no matter what

let j = 100;

do {
  // console.log(`Number ${j}`);
  j++;
} while (j < 10);

// LOOPS THROUGH ARRAYS

const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

for (let i = 0; i < cars.length; i++) {
  // console.log(cars[i]);
}

// Foreach can take three arguments.

// 1) The element of the array
cars.forEach(function (car) {
  // console.log(car);
});

// 2) The index can also be included
cars.forEach(function (car, index) {
  // console.log(`${index} : ${car}`);
});

// 3) The whole array can also be included
cars.forEach(function (car, index, array) {
  // console.log(array);
});

// MAP
const users = [
  { id: 1, name: 'Steve' },
  { id: 2, name: 'Kees' },
  { id: 3, name: 'Sara' },
];

const ids = users.map(function (user) {
  return user.id;
});

// console.log(ids);

// FOR IN LOOPS
const user = {
  firstName: 'John',
  lastName: 'Doe',
  age: 30,
};

for (let x in user) {
  // console.log(`Key: ${x}, Value: ${user[x]}`);
}
