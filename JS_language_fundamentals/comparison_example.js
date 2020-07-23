const id = '100';

// == Means we evaluate by value.
if (id == 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

// === Means we evaluate by value and type
if (id === 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}

if (id !== 100) {
  console.log('CORRECT');
} else {
  console.log('INCORRECT');
}
