/*
  Data Types:

    - Primitive
    - Reference

  Primitives :

    Primitive types are stored directly in the location the variable accesses
    These data types are stored on the stack

    - Strings
    - Numbers
    - Boolean
    - Null
    - Undefined
    - Symbols (ES6)

  References:

    Reference types are objects that are accessed by reference, so the data isn't stored in the variable
    These data types are stored on the heap
    Pointer to a location in memory

    - Arrays
    - Object literals
    - Functions
    - Dates
    - Object wrappers


  JS is dynamically typed, meaning the variable is typed by the data it holds. The same variable can hold multiple types. 
  For example, let data = 1 is currently a number, but I could reassign its value to a string. In a statically typed language
  like c++, this would not work. We don't need to define types when we declare:

  Statically typed:

    - int number = 5

  Dynamically typed:

    - number = 5    <---number
    - number = "5"  <---string
*/

// Primitive types:

const string = 'String';
console.log(typeof name);

const number = 123;
console.log(typeof number);

const boolean = true;
console.log(typeof boolean);

const nullExample = null;
console.log(typeof nullExample); // This will evaluate to object, which is a bug with JS

let undefinedExample;
console.log(typeof undefinedExample);

const symbol = Symbol();
console.log(typeof symbol);

// Reference types:

const array = [1, 2, 3, 4, 5];
console.log(typeof array);

const objectLiteral = {
  key: 'value',
  key2: 'value2',
};
console.log(typeof objectLiteral);

const date = new Date();
console.log(typeof date);

/*
  Type conversion: Taking a variable and changing the data type
  Type coercion: Take one type and change it to another, but this time JS handles this for us
*/

let val;

val = 5;

// Types to string
val = String(val);
val = String(2 + 2);
val = (5).toString();
val = String(true);
val = true.toString();
val = String(new Date());
val = String([1, 2, 3, 4]);

// Types to number
val = Number('5');
val = Number(true);
val = Number(false);
val = Number(null);
val = Number('Hello'); // Evaluated to NaN (Not a Number)

val = parseInt('100.3');
val = parseFloat('100.3');

console.log(`Value: ${val}`);
console.log(`Type: ${typeof val}`);

// Coercion
const val1 = '5';
const val2 = 6;
const sum = val1 + val2;

console.log(sum);
console.log(typeof sum);
