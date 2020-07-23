const firstName = 'William';
const lastName = 'Johnson';
const age = 28;
const str = 'Hello there my name is Kees';

let val;

val = firstName + lastName;

// Concatenation
val = firstName + ' ' + lastName;
val = 'Hello my name is ' + firstName + ' and I am ' + age;

// Append
val = 'Kees ';
val += 'Jansen';

// Escaping - Put a backslash infront of something

// Length
val = firstName.length;

// concat
val = firstName.concat(' ', lastName);

// Change case
val = firstName.toUpperCase();
val = firstName.toLowerCase();

// Treating strings like an array
val = firstName[0];

// indexOf() - Equates to -1 if char is not present
val = firstName.indexOf('l');

// charAt()
val = firstName.charAt('2');

// Get last character
val = firstName.charAt(firstName.length - 1);

// Substring()
val = firstName.substring(0, 4);

// slice
val = firstName.slice(0, 4);
val = firstName.slice(-3);

// Split - good idea for splitting things, like CSVs
val = str.split(' '); // Turns val into an array

// replace()
val = str.replace('Kees', 'Jack');

// includes()
val = str.includes('Kees'); // Case sensitive

console.log(val);
