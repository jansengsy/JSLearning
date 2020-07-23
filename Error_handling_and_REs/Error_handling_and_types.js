// Errors: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Error

const user = {
  email: 'jdoe@gmail.com',
};

try {
  // ReferenceError
  //myFunction();

  // TypeError
  //null.myFunction();

  // SyntaxError
  //eval('Hello world');

  // URIError
  //decodeURIComponent('%');

  // Example of making our own errors
  if (!user.name) {
    //throw 'User has no name';
    throw new SyntaxError('User has no name');
  }
} catch (err) {
  console.log(err);
} finally {
  // This will run regardless of try catch result
  console.log('Will always run');
}

console.log('Program continues');
