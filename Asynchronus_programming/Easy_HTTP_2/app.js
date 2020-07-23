const data = {
  name: 'John Doe',
  username: 'jDoe',
  email: 'jdoe@gmail.com',
};

const data2 = {
  name: 'John Doe',
  username: 'jDoe',
  email: 'jdoe@yahoo.com',
};

http = new EasyHTTP();

// Get users
const users = http
  .get('https://jsonplaceholder.typicode.com/users')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

http
  .post('https://jsonplaceholder.typicode.com/users', data)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

http
  .put('https://jsonplaceholder.typicode.com/users/10', data2)
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

http
  .delete('https://jsonplaceholder.typicode.com/users/10')
  .then((data) => console.log(data))
  .catch((err) => console.log(err));
