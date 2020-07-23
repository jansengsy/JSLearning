// SETS - Store unique values of any type.

const set1 = new Set();

// Add values to set
set1.add(100);
set1.add('A string');
set1.add({ name: 'John' });
set1.add(true);
set1.add(100); // This will not be added (set values are unique)

const set2 = new Set([1, true, 'String']);

console.log(set1);
console.log(set1.size);
console.log(set2);

// Check for values
console.log(set1.has(100)); // True
console.log(set1.has(200)); // False
console.log(set1.has(50 + 50)); // True
console.log(set1.has({ name: 'John' })); // False (due to objects being a reference type)

// Delete from the set
set1.delete(100);
console.log(set1);

// ITERATING THROUGH SETS

// For..of
for (let item of set1) {
  console.log(`Items: ${item}`);
}

// Same thing as the abovez:
// for (let item of set1.keys()) {
//   console.log(`Items: ${item}`);
// }

// for (let item of set1.values()) {
//   console.log(`Items: ${item}`);
// }

// ForEach loop
set1.forEach((value) => {
  console.log(`For each items: ${value}`);
});

// CONVERT SET TO ARRAY
const setArray = Array.from(set1);
console.log(setArray);
