class EasyHTTP {
  constructor() {
    this.http = new XMLHttpRequest();
  }

  // Make a HTTP GET Request
  get(url, callback) {
    this.http.open('GET', url, true);

    // This is fixed in ES6 arrow functions due to lexical this
    let self = this;
    this.http.onload = function () {
      if (self.http.status === 200) {
        callback(null, self.http.responseText);
      } else {
        callback('Error: ' + self.http.status);
      }
    };

    this.http.send();
  }

  // Make a HTTP POST Request
  post(url, data, callback) {
    this.http.open('POST', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function () {
      callback(null, self.http.responseText);
    };

    this.http.send(JSON.stringify(data));
  }

  // Make a HTTP PUT Request
  put(url, data, callback) {
    this.http.open('PUT', url, true);
    this.http.setRequestHeader('Content-type', 'application/json');

    let self = this;
    this.http.onload = function () {
      callback(null, self.http.responseText);
    };

    this.http.send(JSON.stringify(data));
  }

  // Make a HTTP DELETE Request
  delete(url, callback) {
    this.http.open('DELETE', url, true);

    let self = this;
    this.http.onload = function () {
      callback(null, 'Post deleted');
    };

    this.http.send();
  }
}
