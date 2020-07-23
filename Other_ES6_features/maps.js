// MAP = Key value pairs - We can use ANY type as a key or a value
const map1 = new Map();

// Set keys
const key1 = 'some string';
(key2 = {}), (key3 = function () {});

// Set map values by key
map1.set(key1, 'Value of key 1');
map1.set(key2, 'Value of key 2');
map1.set(key3, 'Value of key 3');

// Get values by key
console.log(map1.get(key1));
console.log(map1.get(key2));
console.log(map1.get(key3));

// Count values inside of a map
console.log(map1.size);

// ITERATING MAPS

// Loop using for..of to get keys and values
for (let [key, value] of map1) {
  console.log(`${key} = ${value}`);
}

// Iterate keys only
for (let key of map1.keys()) {
  console.log(key);
}

// Iterate values only
for (let value of map1.values()) {
  console.log(value);
}

// Loop with foreach
map1.forEach((value, key) => {
  console.log(`${key} = ${value}`);
});

// CONVERT SETS TO ARRAYS

// Create an array of the key value pairs
const keyValArray = Array.from(map1);
console.log(keyValArray);

// Create an array of the values
const valArray = Array.from(map1.values());
console.log(valArray);

// Create an array of the keys
const keyArray = Array.from(map1.keys());
console.log(keyArray);
