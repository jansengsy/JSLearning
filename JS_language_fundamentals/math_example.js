const num1 = 100;
const num2 = 50;
let val;

// Simple math with numbers
val = num1 + num2;
val = num1 - num2;
val = num1 * num2;
val = num1 / num2;
val = num1 % num2;

// Math object
val = Math.PI;
val = Math.E;
val = Math.round(2.8);
val = Math.ceil(2.3);
val = Math.floor(2.8);
val = Math.sqrt(64);
val = Math.abs(-30);
val = Math.pow(8, 2); // 8 to the 2nd
val = Math.min(2, 33, 4, 1, 55, 6, 67); // Returns minimum number
val = Math.max(2, 33, 5, 6);
val = Math.random(); // Random decimal
val = Math.floor(Math.random() * 20 + 1); // Random number between 1 and 20

console.log(val);
