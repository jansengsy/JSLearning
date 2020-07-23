/**
 * EasyHttp Library
 * Library for making HTTP requests
 *
 * @version 2.0.0
 * @license MIT
 *
 **/
class EasyHTTP {
  get(url) {
    return new Promise((res, rej) => {
      fetch(url)
        .then((res) => res.json())
        .then((data) => res(data))
        .catch((err) => rej(err));
    });
  }

  post(url, data) {
    return new Promise((res, rej) => {
      fetch(url, {
        method: 'post',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => res(data))
        .catch((err) => rej(err));
    });
  }

  put(url, data) {
    return new Promise((res, rej) => {
      fetch(url, {
        method: 'put',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify(data),
      })
        .then((res) => res.json())
        .then((data) => res(data))
        .catch((err) => rej(err));
    });
  }

  delete(url) {
    return new Promise((res, rej) => {
      fetch(url)
        .then((res) => res.json())
        .then(() => res('User deleted'))
        .catch((err) => rej(err));
    });
  }
}
