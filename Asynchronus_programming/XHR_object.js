/* 
  There are three main ways we will have seen async code:
    - Callbacks
    - Promises
    - Async/await
*/

// Common HTTP statuses:
// 200: "OK"
// 403: "Forbidden"
// 404: "Not Found"

// Ready state values:
// 0: Request not initialized
// 1: Server connection established
// 2: Request Received
// 3: Processing request
// 4: Request finished and response is ready

document.getElementById('button').addEventListener('click', loadData);

function loadData() {
  //Create XHR Object
  const xhr = new XMLHttpRequest();

  // OPEN
  // Args: Type of request, what we're reading in, async or not
  xhr.open('GET', 'data.txt', true);
  console.log(`Ready state: ${xhr.readyState}`);

  // Optional - Used for spinners/loaders
  xhr.onprogress = function () {
    console.log(`Ready state: ${xhr.readyState}`);
  };

  xhr.onload = function () {
    console.log(`Ready state: ${xhr.readyState}`);
    if (this.status === 200) {
      document.querySelector(
        '#output'
      ).innerHTML = `<h1>${this.responseText}</h1>`;
    }
  };

  xhr.onerror = function () {
    console.log('Request error...');
  };
  xhr.send();
}
