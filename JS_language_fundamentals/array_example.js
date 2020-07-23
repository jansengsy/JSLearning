// Create some arrays
const numbers = [43, 56, 33, 23, 44, 36, 5];
const numbers2 = new Array(22, 45, 78, 5, 31, 4, 99);
const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
const mixed = [22, 'string', true, undefined, null, { a: 1, b: 2 }, new Date()];

let val;

// Get array length
val = numbers.length;

// Check if is array
val = Array.isArray(numbers);

// Get single value from array
val = numbers[2];

// Insert into array
numbers[2] = 100;

// Find index of value
val = numbers.indexOf(36);

// MUTATING ARRAYS
numbers.push(1000); // Add to end

numbers.unshift(2000); // Add to front

numbers.pop(); // Remove from end

numbers.shift(); // Remove from front

numbers.splice(0, 1); // Remove from index to index

// Concatenate arrays
val = numbers.concat(numbers2);

// Sorting arrays
val = fruit.sort();
val = numbers.sort();

// Use the "compare function"
val = numbers.sort(function (x, y) {
  return x - y;
});

// Reverse sort
val = numbers.sort(function (x, y) {
  return y - x;
});

// Find first number under 50
function under50(num) {
  return num < 50;
}

val = numbers.find(under50);

console.log(numbers);
console.log(val);
