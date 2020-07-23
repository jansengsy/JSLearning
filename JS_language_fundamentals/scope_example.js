// GLOBAL SCOPE:
var a = 1; // Don't use var in ES6!
let b = 2;
const c = 3;

// FUNCTION SCOPE
function test() {
  var a = 4;
  let b = 5;
  const c = 6;

  console.log('Function scope: ', a, b, c);
}

// BLOCK LEVEL SCOPE

if (true) {
  var a = 4; // This is why you don't use var (look at the output for global scope a)
  let b = 5;
  const c = 6;

  console.log('Block scope: ', a, b, c);
}

for (var a = 0; a < 10; a++) {
  // This loop is another example of why you don't use var (look at the output for global scope a)
}

test();
console.log('Global scope: ', a, b, c);
