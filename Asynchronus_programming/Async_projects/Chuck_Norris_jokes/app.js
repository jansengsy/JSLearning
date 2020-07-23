document.querySelector('.get-jokes').addEventListener('click', getJokes);

function getJokes(e) {
  e.preventDefault();

  const numberInput = document.querySelector('input[type="number"');
  const number = numberInput.value;

  const xhr = new XMLHttpRequest();

  xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

  xhr.onload = function () {
    if (numberInput.value === '') {
      numberInput.setAttribute('style', 'border-color: red');

      // Create error message
      const div = document.createElement('div');
      div.setAttribute('style', 'color:red');
      div.appendChild(document.createTextNode('Please enter a number'));
      div.appendChild(document.createElement('br'));
      const input = document.getElementById('number_label');
      input.parentNode.insertBefore(div, input.nextSibling);
      setTimeout(function () {
        div.remove();
        numberInput.setAttribute('style', 'border-color: black');
      }, 2000);
      return;
    }

    if (this.status === 200) {
      const jokes = JSON.parse(this.responseText);
      let output = '';
      if (jokes.type === 'success') {
        jokes.value.forEach((joke) => {
          output += `<li>${joke.joke}</li>`;
        });
      } else {
        output += '<li>Something went wrong...</li>';
      }
      document.querySelector('.jokes').innerHTML = output;
    }
  };

  xhr.send();
}
