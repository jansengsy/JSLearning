document.getElementById('button1').addEventListener('click', getText);
document.getElementById('button2').addEventListener('click', getJson);
document.getElementById('button3').addEventListener('click', getExternal);

function getText() {
  fetch('test.txt')
    .then(function (res) {
      return res.text();
    })
    .then(handleErrors)
    .then(function (data) {
      document.getElementById('output').innerHTML = data;
    })
    .catch(function (err) {
      console.log(err);
    });
}

// As we can see, arrow functions are shorter
function getTextArrow() {
  fetch('test.txt')
    .then((res) => res.text())
    .then(handleErrors)
    .then((data) => (document.getElementById('output').innerHTML = data))
    .catch((err) => console.log(err));
}

function getJson() {
  fetch('posts.json')
    .then(function (res) {
      return res.json();
    })
    .then(handleErrors)
    .then(function (data) {
      let output = '';
      data.forEach((post) => {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getJsonArrow() {
  fetch('posts.json')
    .then((res) => res.json())
    .then(handleErrors)
    .then((data) => {
      let output = '';
      data.forEach((post) => {
        output += `<li>${post.title}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch((err) => console.log(err));
}

function getExternal() {
  fetch('https://api.github.com/userds')
    .then(function (res) {
      return res.json();
    })
    .then(handleErrors)
    .then(function (data) {
      let output = '';
      data.forEach((user) => {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch(function (err) {
      console.log(err);
    });
}

function getExternalArrow() {
  fetch('https://api.github.com/userds')
    .then((res) => res.json)
    .then(handleErrors)
    .then((data) => {
      let output = '';
      data.forEach((user) => {
        output += `<li>${user.login}</li>`;
      });
      document.getElementById('output').innerHTML = output;
    })
    .catch((err) => console.log(err));
}

function handleErrors(res) {
  if (!res.ok) throw new Error(res.error);
  return res;
}
